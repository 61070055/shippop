import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import DescriptionOfBook from "./Components/Description/Descriptionofbook";

const Home = () => <Homepage />;
const Book01 = () => <DescriptionOfBook />;
// const Best_Sell = () => <h1>Best Selling</h1>
// const Sales = () => <h1>Sales</h1>
// const Recommend = () => <h1>Recommend Products</h1>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/book01" component={Book01} />
      {/* <Route path="/best_sell" component={Best_Sell} />
      <Route path="/sales" component={Sales} />
      <Route path="/recommend" component={Recommend} /> */}
    </div>
  );
}

export default App;
