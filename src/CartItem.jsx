import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';

const Cart = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      let totalAmount = 0;
        cartItems.forEach((item) => {
          totalAmount += item.price * item.quantity;
        });
        return totalAmount;
  };

  const handleContinueShopping = (e) => {
       let totalCost = 0;
      totalCost = item.price * item.quantity;
      return totalCost;
  };

  const handleRemove = (plant) => {
    dispatch(removeItemFromCart(plant));
  };


  const handleDecrement = (item) => {
   dispatch(increaseItemQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return ( <div className="cart-container">
      <h2 style={{ color: 'black', fontSize:'48px' }}>
        Total Cart Amount: 
        $ {calculateTotalAmount()} 
      </h2>

      <ul>
        {/* SET KEY VALUE IS NAME */}
        {cartItems.map((item) => (
          <li className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image}/>
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" 
                  onClick={() => handleDecrement(item.name)}>-</button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item.name)}>+</button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button className="cart-item-delete" 
                onClick={() => handleRemove(item.name)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
      <div>
        <button className="get-started-button" style={{color: 'black'}} onClick={handleClearCart}
          > Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;


