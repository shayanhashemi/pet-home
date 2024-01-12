from collections import deque
import sqlite3
from fastapi import FastAPI, HTTPException

conn = sqlite3.connect('Database.db', timeout=360, check_same_thread=False, isolation_level=None)

app = FastAPI()

shopping_carts = {}
cart_history = {}

@app.post('/cart/{user_id}')
def add_to_cart(user_id: str, item_id: str, quantity: int):
    if quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than 0")

    user_cart = shopping_carts.setdefault(user_id, set())
    user_history = cart_history.setdefault(user_id, deque())

    if item_id in user_cart:
        raise HTTPException(status_code=400, detail="Item already in the cart")

    user_cart.add(item_id)

    user_history.append(('add', item_id, quantity))

    return {'message': 'Item added to cart successfully'}


@app.put('/cart/{user_id}/{item_id}')
def update_cart(user_id: str, item_id: str, quantity: int):
    if user_id not in shopping_carts:
        raise HTTPException(status_code=404, detail="User not found")

    user_cart = shopping_carts[user_id]
    user_history = cart_history.setdefault(user_id, deque())

    if item_id not in user_cart:
        raise HTTPException(status_code=404, detail="Item not found or invalid request")


    user_history.append(('update', item_id, quantity))

    return {'message': 'Cart updated successfully'}

@app.delete('/cart/{user_id}/{item_id}')
def remove_from_cart(user_id: str, item_id: str):
    if user_id not in shopping_carts:
        raise HTTPException(status_code=404, detail="User not found")

    user_cart = shopping_carts[user_id]
    user_history = cart_history.setdefault(user_id, deque())

    if item_id not in user_cart:
        raise HTTPException(status_code=404, detail="Item not found")

    user_cart.remove(item_id)

    user_history.append(('remove', item_id))

    return {'message': 'Item removed from cart successfully'}

@app.get('/cart/{user_id}')
def get_cart(user_id: str):
    return list(shopping_carts.get(user_id, set()))

@app.get('/cart/history/{user_id}')
def get_cart_history(user_id: str):
    return list(cart_history.get(user_id, []))

@app.get('/blogs/')
def get_blogs():
    global conn
    cur = conn.cursor()
    cur.execute("SELECT * FROM blog")
    columns = [col[0] for col in cur.description]
    rows = cur.fetchall()
    data = [dict(zip(columns, row)) for row in rows]
    cur.close()
    return data

@app.get('/blog/{blog_id}')
def get_blog(blog_id: int):
    global conn
    cur = conn.cursor()
    cur.execute(f'SELECT title, score, category, summary, date, img FROM blog WHERE id = "{blog_id}";')
    blog_data = cur.fetchone()
    cur.close()
    if blog_data is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    else:
        blog_dict = {
            'title': blog_data[0],
            'score': blog_data[1],
            'category': blog_data[2],
            'summary': blog_data[3],
            'date': blog_data[4],
            'img': blog_data[5]
        }
        return blog_dict

@app.post('/blog/add')
def add_blog(title: str, score: float, category: str, summary: str, date: str, img: str):
    global conn
    cur = conn.cursor()
    cur.execute(
        f'INSERT INTO blog (title, score, category, summary, date, img) '
        f'VALUES ("{title}", {score}, "{category}", "{summary}", "{date}", "{img}");'
    )
    blog_id = cur.lastrowid
    conn.commit()
    cur.close()

    return {"message": "Blog added successfully", "blog_id": blog_id}

@app.put('/blog/change-score/{blog_id}')
def change_score_blog(blog_id: int, new_score: float):
    global conn
    cur = conn.cursor()
    cur.execute(f'UPDATE blog SET score = {new_score} WHERE id = {blog_id};')
    conn.commit()
    cur.close()
    return {"message": "Score updated successfully"}