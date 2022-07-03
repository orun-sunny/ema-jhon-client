import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState ([])
    useEffect(() =>{
        fetch('./products.JSON')
        .then (res =>res.json())
        .then(data =>setProducts(data));
    },[])


    return (

       
        <div className='shop-container'>
            <div className="product-container">
                <h3>products:{products.length}</h3>
                {
                    products.map (product => <Product product= {product} ></Product>)
                }
    


            </div>
            <div className="cart-cotainer">

             <h2>   cart details</h2>
            </div>
            
        </div>
    );
};

export default Shop;