import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProduct,setDisplayProducts] = useState([]);

    useEffect(() => {
        console.log ('product api called')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
               

    });
            
    }, []);

    useEffect( ()=>{
        
        if(products.length){
            
        
        const saveCart = getStoredCart();
        const storedCart = [];
        for (const key in saveCart){
            // console.log(key,saveCart[key]);
            const addedProduct = products.find (product => product.key ===key);
          if (addedProduct){
            const quantity = saveCart[key];
            addedProduct.quantity = quantity;
            // console.log(addedProduct);
            storedCart.push(addedProduct)
          }
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

    const handleSearch =event => {
        const searchText=event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);




        console.log(matchedProducts.length);

    }


    return (
        <>

        <div className="search-container">
            <input type="text"
             placeholder='search product'
             onChange={handleSearch}
              />
        </div>


        <div className='shop-container'>
            <div className="product-container">
                <h3>products:{products.length}</h3>
                {
                    displayProduct.map(product => <Product
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
        </>
    );
};

export default Shop;