import React from 'react';
import SingleProduct from './SingleProduct'
import '../css/Home.css';

const Products = ({products, addToCart}) => {
    
    return (products.map((singleProduct) => (
        <SingleProduct 
            key= {singleProduct.ID} 
            singleProduct={singleProduct}
            addToCart = {addToCart}
        >
        </SingleProduct>
    )))
    

}
export default Products;