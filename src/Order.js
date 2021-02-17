import React, { useState, useEffect} from 'react';
import {Link,Route,useHistory} from "react-router-dom";
import Pizza from "./Pizza";
import { Redirect } from 'react-router';

const Order = (props) => {

    const [redirect, setRedirect] = useState(false)
    const {disabled,values, submit,change,errors,order} = props
const onSubmit = evt => {
    evt.preventDefault()
    submit()
   
}

const onChange = evt => { //If the value of the target (typed or selected) changes send it to the change function to update state
    const{name, value ,type, checked} = evt.target
    const valueToUse = type === 'checkbox'? checked : value // this checks to see if the type=checkbox type then send checked else send value
    change(name, valueToUse) 
}
const history = useHistory();

useEffect( () => { 
    if(values.pineapple===true){
        history.push('-1')
    }
},[values.pineapple])

    return (
    <form className='form container' onSubmit={onSubmit}> 
    <div className="orderTaker">
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
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
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
        <div>{errors.special}</div>
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
        {
            
        }


        </div>


    </div>
    <div className ='displayorder'>
        <h2>Your current order so far</h2>
    <h3>Name {values.name}</h3>
    <h3>Size {values.size}</h3>
    <h3>Toppings {values.cheese 
        ?" Extra Cheese ":" "
        }
        {values.pineapple 
        ?" Pineapple ":" "
        }{values.peppers 
        ?" Peppers ":" "
        }{values.mushrooms 
        ?" Mushrooms ":" "
        }</h3>
    <h3>Special Instructions {values.special}</h3>
    <Link to ='/pizza'>Click to see Completed Order</Link>
    </div>
   
    </form>
  
  


);

};
export default Order;

// {redirect
//     ?
//     <Redirect push to="/pizza" />
//     : ""
//     }  
//     <Route path="/pizza">
//     <Pizza order={order}/> 
//     </Route>
//     onClick={() => history.push('/pizza')}