from collections import deque
import sqlite3
from fastapi import FastAPI, HTTPException

conn = sqlite3.connect('Database.db', timeout=360, check_same_thread=False, isolation_level=None)

app = FastAPI()

shopping_carts = {}
cart_history = {}

class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add_node(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def get_all_nodes(self):
        nodes = []
        current = self.head
        while current:
            nodes.append(current.data)
            current = current.next
        return nodes

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

class ScoreQueue:
    def __init__(self):
        self.queue = deque(maxlen=10)  # Keep track of the last 10 updated scores

    def enqueue(self, score):
        self.queue.append(score)

    def get_recent_scores(self):
        return list(self.queue)

recently_added_stack = Stack()
recent_scores_queue = ScoreQueue()
recently_added_list = LinkedList()

@app.post('/cart/{user_id}')
def add_to_cart(user_id: str, item_id: str, quantity: int):
    if quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than 0")

    user_cart = shopping_carts.setdefault(user_id, {})
    user_history = cart_history.setdefault(user_id, deque())

    if item_id in user_cart:
        user_cart[item_id] += quantity
    else:
        user_cart[item_id] = quantity

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

    user_cart[item_id] = quantity

    user_history.append(('update', item_id, quantity))

    return {'message': 'Cart updated successfully'}

@app.delete('/cart/{user_id}/{item_id}')
def remove_from_cart(user_id: str, item_id: str, quantity: int = None):
    if user_id not in shopping_carts:
        raise HTTPException(status_code=404, detail="User not found")

    user_cart = shopping_carts[user_id]
    user_history = cart_history.setdefault(user_id, deque())

    if item_id not in user_cart:
        raise HTTPException(status_code=404, detail="Item not found")

    if quantity is not None and user_cart[item_id] > quantity:
        user_cart[item_id] -= quantity
    else:
        del user_cart[item_id]

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
    global conn, recently_added_list
    cur = conn.cursor()
    cur.execute(
        f'INSERT INTO blog (title, score, category, summary, date, img) '
        f'VALUES ("{title}", {score}, "{category}", "{summary}", "{date}", "{img}");'
    )
    blog_id = cur.lastrowid
    conn.commit()
    cur.close()
    recently_added_list.add_node(blog_id)
    return {"message": "Blog added successfully", "blog_id": blog_id}


@app.get('/recently-added-blogs/')
def get_recently_added_blogs():
    global recently_added_list
    return {"recently_added_blogs": recently_added_list.get_all_nodes()}

@app.put('/blog/change-score/{blog_id}')
def change_score(blog_id: int, new_score: float):
    global conn
    cur = conn.cursor()
    cur.execute(f'UPDATE blog SET score = {new_score} WHERE id = {blog_id};')
    conn.commit()
    cur.close()
    return {"message": "Score updated successfully"}
    
@app.get('/products/')
def get_products():
    global conn
    cur = conn.cursor()
    cur.execute("SELECT * FROM products")
    columns = [col[0] for col in cur.description]
    rows = cur.fetchall()
    data = [dict(zip(columns, row)) for row in rows]
    cur.close()
    return data
    
    
@app.get('/product/{product_id}')
def get_product(product_id: int):
    global conn
    cur = conn.cursor()
    cur.execute(f'SELECT title, price, brand, category, score, stock, description, img FROM products WHERE id = "{product_id}";')
    product_data = cur.fetchone()
    cur.close()
    if product_data is None:
        raise HTTPException(status_code=404, detail="Product not found")
    else:
        product_dict = {
            'title': product_data[0],
            'price': product_data[1],
            'brand': product_data[2],
            'category': product_data[3],
            'score': product_data[4],
            'stock': product_data[5],
            'description': product_data[6],
            'img': product_data[7]
        }
        return product_dict
    
@app.post('/product/add')
def add_product(title: str, price: float, brand: str, category: str, score: float, stock: int, description: str, img: str):
    global conn
    cur = conn.cursor()
    cur.execute(
        f'INSERT INTO products (title, price, brand, category, score, stock, description, img) '
        f'VALUES ("{title}", {price}, "{brand}", "{category}", {score}, {stock}, "{description}", "{img}");'
    )
    product_id = cur.lastrowid
    conn.commit()
    cur.close()

    return {"message": "Product added successfully", "product_id": product_id}


@app.put('/product/change-score/{product_id}')
def change_score_product(product_id: int, new_score: float):
    global conn, recent_scores_queue
    cur = conn.cursor()
    cur.execute(f'UPDATE products SET score = {new_score} WHERE id = {product_id};')
    conn.commit()
    cur.close()

    recent_scores_queue.enqueue(new_score)

    return {"message": "Score updated successfully"}

@app.get('/recently-updated-scores/')
def get_recently_updated_scores():
    global recent_scores_queue
    return {"recently_updated_scores": recent_scores_queue.get_recent_scores()}

@app.put('/product/change-stock/{product_id}')
def change_stock(product_id: int, new_stock: int):
    global conn
    cur = conn.cursor()
    cur.execute(f'UPDATE products SET stock = {new_stock} WHERE id = {product_id};')
    conn.commit()
    cur.close()

    return {"message": "Stock updated successfully"}

@app.get('/product/category/{category}')
def get_products_in_category(category: str):
    global conn
    cur = conn.cursor()
    cur.execute(f'SELECT * FROM products WHERE category = "{category}";')
    products_in_category = cur.fetchall()
    cur.close()

    if not products_in_category:
        raise HTTPException(status_code=404, detail=f"No products found in category: {category}")

    return products_in_category

@app.get('/product/price-range/')
def get_products_in_price_range(min_price: float, max_price: float):
    global conn
    cur = conn.cursor()
    cur.execute(f'SELECT * FROM products WHERE price >= {min_price} AND price <= {max_price};')
    products_in_price_range = cur.fetchall()
    cur.close()

    if not products_in_price_range:
        raise HTTPException(status_code=404, detail=f"No products found in the specified price range")

    return products_in_price_range

@app.get('/product/matching-title/')
def get_products_with_matching_title(title: str):
    global conn
    cur = conn.cursor()
    cur.execute(f'SELECT * FROM products WHERE title LIKE "%{title}%";')
    matching_products = cur.fetchall()
    cur.close()

    if not matching_products:
        raise HTTPException(status_code=404, detail=f"No products found with matching title: {title}")

    return matching_products

