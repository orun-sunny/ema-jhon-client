import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (


        <div className='shop-container'>
            <div className="product-container">
                <h3>products:{products.length}</h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }



            </div>
            <div className="cart-cotainer">

                <h2>   cart details</h2>
                <h5>iteams orderes: {cart.length} </h5>
            </div>

        </div>
    );
};

export default Shop;