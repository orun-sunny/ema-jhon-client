import React from 'react';
import './Cart.css'

const Cart = (props) => {

  const {cart} =props;
  let total = 0;
  for (const product of cart){
    total = total + product.price;
  }
  const shipping = total > 0 ? 15:0;
  const tax = (total +shipping) * .10;
  const grandTotal =total +shipping + tax;

    return (
        <div>
             <h2>   cart details</h2>
                <h5>iteams orderes: {props.cart.length} </h5>

                <p>Total: {total} </p>
                <p>shipping : {shipping} </p>
                <p>tax: {tax} </p>
                <p></p>
                <p>grandTotal: {grandTotal} </p>
        </div>
    );
};

export default Cart;