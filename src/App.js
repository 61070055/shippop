import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import DescriptionOfBook from "./Components/Description/Descriptionofbook";
import CartEdit from "./Components/Cart/CartEdit";

const Home = () => <Homepage />;
const Book = () => <DescriptionOfBook />;
const Cart = () => <CartEdit />;
// const Sales = () => <h1>Sales</h1>
// const Recommend = () => <h1>Recommend Products</h1>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/book" component={Book} />
      <Route path="/cart" component={Cart} />
      {/* <Route path="/sales" component={Sales} />
      <Route path="/recommend" component={Recommend} /> */}
    </div>
  );
}

export default App;
