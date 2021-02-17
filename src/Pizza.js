import React from 'react';
// import { Route, Link, Switch } from "react-router-dom";

const Pizza = (props) => {
   console.log("this is props", props.order)
    const {name,size,special,mushrooms,peppers,cheese,pineapple }= props.order
    return (
    <div className="pizza">
    {/* <Nav /> */}
    
    <h2>Your pizza is on the way</h2>
    <h3>Name of Order :::: {name}</h3>
    <h3>Special instructions on Order :::: {special}</h3>
    <h3>Size of Order ::::  {size}</h3>
    <h3>Toppings ::::{
        cheese 
        ?" Extra Cheese ":" "
        }
        {pineapple 
        ?" Pineapple ":" "
        }{peppers 
        ?" Peppers ":" "
        }{mushrooms 
        ?" Mushrooms ":" "
        }</h3>
    </div>
);

};
export default Pizza;

// const intialOrder = {
//     ///// TEXT INPUTS /////
//     name: '', 
//     special: '',
//       ///// Dropdown /////
//     size: '',
//     ///// CHECKBOXES /////
//     mushrooms: false,
//     cheese: false,
//     peppers: false,
//     pineapple: false,
//   }