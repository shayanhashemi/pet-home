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