import React, {useState, useEffect} from 'react';
import db from '../config/Config'
import Nav from './Nav';
import Products from './Products';
import '../css/Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

        const getProducts = async () => {
            const products = await db.collection('all-products').get();
            const productsArray = [];
            for (var snap of products.docs){
                var data = snap.data();
                data.ID = snap.id;
                productsArray.push({
                    ...data
                })

                if(productsArray.length === products.docs.length){
                    setProducts(productsArray);
                }
            }
        }

        useEffect(() => {
            getProducts();
        }, []) 

        let Product;
        const addToCart = (product) => {
            console.log(product);
            Product = product;
            Product['Quantity'] = 1;
            Product['TotalPrice'] = Product.Quantity*Product.Amount;
            db.collection('cart').doc(product.ID).set(Product)
                .then(() => {
                    console.log('Product added to cart successfully!')
                })
        }


    return (
        <div className="page-container">
            <Nav></Nav>
            <br></br>
            <h1 className="title">ALL PRODUCTS</h1>
            <div className="products-wrapper">
                <br></br>
                {products.length > 0 && (
                    <div className="container-fluid">
                        <Products 
                            products={products} 
                            addToCart={addToCart} 
                        />
                    </div>
                )}
                {products.length <1 && (
                    <div className="loading">Loading...</div>
                )}
            
            </div>
        </div>
    )
}

export default Home;