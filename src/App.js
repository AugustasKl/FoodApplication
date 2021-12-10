import Header from "./Layout/Header";
import React, { useState } from "react";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCarthandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
