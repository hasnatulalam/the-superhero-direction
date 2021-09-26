import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    let salary =0;
    for(const contentCreator of cart)
     salary=  salary+contentCreator.Salary;
    let name=[];
    for(const contentCreator of cart)
     name=  name+contentCreator.Name;

    return (
        <div>
           <h2>single Cart</h2>
           <h5>item: {props.cart.length}</h5>
           <p>Salary:${salary}</p>
           <p>Name:{name}</p>
             
        </div>
    );
};

export default Cart;