import './App.css';
import React from 'react';
import { Route } from 'react-router-dom'

import Homepage from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';


const Home = () => <Homepage />
// const News = () => <h1>New</h1>
// const Best_Sell = () => <h1>Best Selling</h1>
// const Sales = () => <h1>Sales</h1>
// const Recommend = () => <h1>Recommend Products</h1>

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      {/* <Route path="/news" component={News} />
      <Route path="/best_sell" component={Best_Sell} />
      <Route path="/sales" component={Sales} />
      <Route path="/recommend" component={Recommend} /> */}
    </div>
  );
}

export default App;
