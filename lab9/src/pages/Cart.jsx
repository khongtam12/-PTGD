import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => dispatch(addItem({ id: 1, name: 'Apple', price: 10, quantity: 1 }))}>Add Apple</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;