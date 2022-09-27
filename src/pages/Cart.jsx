import { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function getTotalCost() {
    const cost = cartItems.length * 5.99;

    return cost.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function placeOrder() {
    setOrderPlaced(true);

    setTimeout(() => {
      console.log("Order placed!");
      setCartItems([]);
      setOrderPlaced(false);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {getTotalCost()}</p>
      <div className="order-button">
        {cartItems.length > 0 && (
          <button onClick={placeOrder}>
            {orderPlaced ? "Ordering..." : "Place Order"}
          </button>
        )}
      </div>
    </main>
  );
}

export default Cart;
