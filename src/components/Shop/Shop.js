import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        console.log ('product api called')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log('Product recieved')

    });
            
    }, []);

    useEffect( ()=>{
        console.log('L S Called')
        if(products.length){
            
        
        const saveCart = getStoredCart();
        const storedCart = [];
        for (const key in saveCart){
            console.log(key);
            const addedProduct = products.find (product => product.key ===key);
           storedCart.push(addedProduct)
        }
        setCart(storedCart);
    }
      
    },[products])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        //save to local storage
        addToDb(product.key);
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

                <Cart cart={cart} ></Cart>
        

               
            </div>

        </div>
    );
};

export default Shop;