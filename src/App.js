import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Pizza";
import Order from './Order'

const App = () => {
   const [order, setOrder] = useState([]) 
   
   
   return (

  

  <div>
    <nav>
      <div className="navstuff">
        <h2> Lambda Eats</h2>
        <div className='navlinks'>
        <Link to = '/'>Home</Link>
        <Link to = '/order'>Order</Link>
        </div>
      </div>
    </nav>
    <Switch>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/pizza">
        <Pizza /> 
      </Route>
        <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);



};
export default App;



const Home = () => (
  <div>
    <h1></h1>
  </div>
);