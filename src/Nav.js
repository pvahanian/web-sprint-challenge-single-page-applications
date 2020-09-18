import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Pizza from './Pizza'


const Nav = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'><h2>Lambda Eats</h2></div>
        <Link to="/">
        <div className='navbar__item'>Home</div>
        </Link>
       
        <Link to="/pizza">
        <div className='navbar__item'>Pizza</div>
        </Link>
    </header>
);

export default Nav;