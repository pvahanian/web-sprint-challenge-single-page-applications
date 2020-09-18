import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, Switch,useHistory } from "react-router-dom";
import Pizza from "./Pizza";
import Order from './Order'
import schema from './Validator'
import * as yup from 'yup'

const intialOrder = {
  ///// TEXT INPUTS /////
  name: '', 
  special: '',
    ///// Dropdown /////
  size: '',
  ///// CHECKBOXES /////
  mushrooms: false,
  cheese: false,
  peppers: false,
  pineapple: false,
}

const intialErrors = {
  name: '', 
  special: '',
  size: 'Please select size',
}
const initialDisabled = true 
const testEmpty=[]




const App = () => {
  const history = useHistory();

  const [completeOrder, setCompleteOrder] = useState(testEmpty)
  const [order, setOrder] = useState(intialOrder) 
  const [orderErrors, setOrderErrors] = useState(intialErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const postPizza = pizzaOrder => {
      axios.post("https://reqres.in/api/users", pizzaOrder)
      .then(res => {
      setCompleteOrder([...completeOrder, res.data]) 
      setOrder(intialOrder)
      history.push('/pizza')
      })
      .catch(err => {
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => { 
        setOrderErrors({...orderErrors,[name]: ""})
      })
      .catch(err=>
        {
          setOrderErrors({...orderErrors, [name]:err.message}) // This will throw the error that is 
        })
    }
      const inputChange = (name, value) => {
        // 🔥 STEP 10- RUN VALIDATION WITH YUP
        validate(name, value)
        setOrder({
          ...order,
          [name]: value // NOT AN ARRAY
        })
    }
    
const formSubmit = () => {

      const newCompleteOrder = {
        name: order.name.trim(),
        size: order.size.trim(),
        special: order.special.trim(),
        mushrooms: order.mushrooms,
        peppers: order.peppers,
        pineapple: order.pineapple,
        cheese: order.cheese,
      }
       postPizza(newCompleteOrder)
      
    }

    useEffect(() =>{                  // This hook takes use to Yup page with schema and validates our info as well as enables submit button
      schema.isValid(order)
      .then(valid=> {
        setDisabled(!valid)           // this will make the submit button ok as long as the info from schema comes back ok
      })
      
    },[order])  

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
        <Order 
        values={order}    //Passes all the values from state to Form and callbacks Submit/Disabled
        change={inputChange}   //Sends our callback function inputChange as 'change' so we can use state to update formvalues one at a time
        submit={formSubmit}    //sends callback submitform as 'submit' 
        disabled={disabled}    //Sends the value of disabled which should be true until all values are validated
        errors={orderErrors}
        order={completeOrder[0]}    //Sends the formsErrors as errors to be able to log the errors near the submit button
      /> 
      </Route>
      <Route path="/pizza">
        <Pizza order={completeOrder[0]}/> 
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
    <Link to = '/order'><h1>Please click when ready to order</h1></Link>
  </div>
);