import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { currency } from "../App";
import { getProductImageUrl } from "../utils/productImage";
import "./CSS/Checkout.css";

const Checkout = () => {
  const { products, cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartProducts = useMemo(() => {
    return products
      .filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        ...product,
        quantity: cartItems[product.id],
      }));
  }, [products, cartItems]);

  const subtotal = getTotalCartAmount();
  const discount = subtotal >= 500 ? 50 : 0;
  const deliveryFee = subtotal > 0 && subtotal < 499 ? 40 : 0;
  const total = Math.max(subtotal - discount + deliveryFee, 0);

  const placeOrder = (event) => {
    event.preventDefault();

    if (cartProducts.length === 0) {
      return;
    }

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="checkout-success">
        <div className="checkout-success-panel">
          <p className="checkout-kicker">Order confirmed</p>
          <h1>Your demo order is ready.</h1>
          <p>
            Payment was simulated successfully. This is perfect for Vercel demos while the real backend and payment
            gateway are being connected.
          </p>
          <Link to="/" className="checkout-primary-link">Continue shopping</Link>
        </div>
      </main>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <main className="checkout-empty">
        <h1>Your cart is empty</h1>
        <p>Add a few fresh items before heading to checkout.</p>
        <Link to="/" className="checkout-primary-link">Browse products</Link>
      </main>
    );
  }

  return (
    <main className="checkout">
      <section className="checkout-heading">
        <p className="checkout-kicker">Secure checkout</p>
        <h1>Delivery and payment</h1>
      </section>

      <form className="checkout-layout" onSubmit={placeOrder}>
        <div className="checkout-form">
          <section className="checkout-section">
            <h2>Delivery details</h2>
            <div className="checkout-grid">
              <input required placeholder="Full name" />
              <input required type="tel" placeholder="Phone number" />
              <input required className="checkout-wide" placeholder="House no, street, area" />
              <input required placeholder="City" />
              <input required placeholder="PIN code" />
            </div>
          </section>

          <section className="checkout-section">
            <h2>Payment method</h2>
            <div className="payment-options">
              <button type="button" className={paymentMethod === "card" ? "active" : ""} onClick={() => setPaymentMethod("card")}>Card</button>
              <button type="button" className={paymentMethod === "upi" ? "active" : ""} onClick={() => setPaymentMethod("upi")}>UPI</button>
              <button type="button" className={paymentMethod === "cod" ? "active" : ""} onClick={() => setPaymentMethod("cod")}>Cash</button>
            </div>

            {paymentMethod === "card" && (
              <div className="checkout-grid payment-fields">
                <input required placeholder="Card number" inputMode="numeric" />
                <input required placeholder="Name on card" />
                <input required placeholder="MM/YY" />
                <input required placeholder="CVV" inputMode="numeric" />
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="checkout-grid payment-fields">
                <input required className="checkout-wide" placeholder="UPI ID, for example name@bank" />
              </div>
            )}

            {paymentMethod === "cod" && (
              <p className="checkout-note">Pay with cash when your groceries arrive. No online payment required.</p>
            )}
          </section>

          <section className="checkout-section checkout-promise">
            <div>
              <strong>Freshness guaranteed</strong>
              <span>Hand-picked items, careful packing, and easy replacement support.</span>
            </div>
            <div>
              <strong>Fast delivery</strong>
              <span>Demo slots show same-day delivery for a polished store experience.</span>
            </div>
          </section>
        </div>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <div className="checkout-items">
            {cartProducts.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={getProductImageUrl(item.image)} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>Qty {item.quantity}</span>
                </div>
                <strong>{currency}{item.new_price * item.quantity}</strong>
              </div>
            ))}
          </div>
          <div className="checkout-totals">
            <div><span>Subtotal</span><span>{currency}{subtotal}</span></div>
            <div><span>Discount</span><span>- {currency}{discount}</span></div>
            <div><span>Delivery</span><span>{deliveryFee === 0 ? "Free" : `${currency}${deliveryFee}`}</span></div>
            <div className="checkout-total"><span>Total</span><span>{currency}{total}</span></div>
          </div>
          <button type="submit" className="checkout-submit">Place demo order</button>
          <p className="checkout-safe">Demo payment only. No real transaction will be made.</p>
        </aside>
      </form>
    </main>
  );
};

export default Checkout;
