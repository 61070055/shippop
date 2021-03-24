import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import DescriptionOfBook from "./Components/Description/Descriptionofbook";
import CartEdit from "./Components/Cart/CartEdit";
import CheckoutPage from "./Components/Cart/Checkout";

const Home = () => <Homepage />;
const Book = () => <DescriptionOfBook />;
const Cart = () => <CartEdit />;
const Checkout = () => <CheckoutPage />;
// const Recommend = () => <h1>Recommend Products</h1>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/book" component={Book} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </div>
  );
}

export default App;
