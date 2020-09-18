import React, { useState, useEffect } from 'react';

import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Pizza";

// Delete 6 thru 15 once all props are being brought in

// const onChange=null;
// const errors={
//     size:"REQUIRED!",
//     name:"REQUIRED!"
// }
// const disabled= null;





const Order = (props) => {


    const {disabled,values, submit,change,errors} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => { //If the value of the target (typed or selected) changes send it to the change function to update state
    const{name, value ,type, checked} = evt.target
    const valueToUse = type === 'checkbox'? checked : value // this checks to see if the type=checkbox type then send checked else send value
    change(name, valueToUse) 
}

    return (
    <div className="ordertaker">
    <h2>Build your own Pizza</h2>
    <div className="orderform">
        {/* 🔥 Name input */}
        <h3>Please enter name for Order</h3>
        <p>{errors.name}</p>
        <label>Name&nbsp;
                <input
                value={values.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>    
        <h3>Choose your Size</h3>
        {/* 🔥 Error needs to be implemented here */}
    <div>{errors.size}</div>
        <label>Size
            {/* 🔥 Size dropdown*/}
            <select name='size' value={values.size} onChange={onChange}>
                <option value="">-- select Size --</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </label>
    </div>

            {/* 🔥 Toppings selecter here */}

    <div className="toppings">
    <h3>Please select your toppings</h3>
    <label>Mushrooms
            <input
            value={values.mushrooms}
            onChange={onChange}
            type="checkbox"
            name="mushrooms"
            />
        </label> 
    <label> Extra Cheese
            <input
            value={values.cheese}
            onChange={onChange}
            type="checkbox"
            name="cheese"
            />
        </label> 
    <label> Peppers
            <input
            value={values.peppers}
            onChange={onChange}
            type="checkbox"
            name="peppers"
            />
    </label>  
    <label> Pineapple
            <input
            value={values.pineapple}
            onChange={onChange}
            type="checkbox"
            name="pineapple"
            />
    </label>
    </div>
    <div></div>
    <div></div>
    <h3>Special instructions</h3>
        <label>Special
                <input
                value={values.special}
                onChange={onChange}
                name='special'
                type='textbox'
                />
            </label> 
    
        <div  className='submit'>
        <button disabled={disabled} id='submitBtn'>Submit</button> 
        </div>
    </div>
);

};
export default Order;



{/* 
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.service}</div> */}