import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { currency } from "../../App";
import { getProductImageUrl } from "../../utils/productImage";
import { Link } from "react-router-dom";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);
  const subtotal = getTotalCartAmount();
  const discount = subtotal >= 500 ? 50 : 0;
  const deliveryFee = subtotal > 0 && subtotal < 499 ? 40 : 0;
  const total = Math.max(subtotal - discount + deliveryFee, 0);

  if (cartProducts.length === 0) {
    return (
      <div className="cartitems cartitems-empty">
        <h1>Your cart is waiting</h1>
        <p>Add fresh groceries, pantry staples, and dairy products to start a demo order.</p>
        <Link to="/">Shop products</Link>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartProducts.map((e)=>{
          return  <div key={e.id}>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={getProductImageUrl(e.image)} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>{currency}{e.new_price}</p>
                      <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>{currency}{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{subtotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Demo Discount</p>
              <p>- {currency}{discount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>{deliveryFee === 0 ? "Free" : `${currency}${deliveryFee}`}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{total}</h3>
            </div>
          </div>
          <Link to="/checkout" className="cartitems-checkout">PROCEED TO CHECKOUT</Link>
        </div>
        <div className="cartitems-promocode">
          <p>Use promo code <strong>FRESH50</strong> on orders above {currency}500.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="FRESH50" />
            <button>Submit</button>
          </div>
          <div className="cartitems-perks">
            <span>Fresh packing</span>
            <span>Same-day demo delivery</span>
            <span>Secure checkout preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
