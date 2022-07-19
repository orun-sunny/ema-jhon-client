import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);

    
    const {name,price,seller,img,stock} = props.product
    // const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            
           <div>
           <h4 className='product-name'>{name}</h4>
            <br />
            <p><small>by:{seller}</small></p>
            <p>price:{price} </p>
            <p><small>only :{stock} available </small> </p> 
            <Rating
            initialRating={3}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star "
              readonly>

              </Rating>
            <br />
            <button 
            onClick={()=>props.handleAddToCart(props.product)}
            className='btn-regular'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
           </div>
        </div>
    );
};

export default Product;