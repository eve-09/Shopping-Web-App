import React, { useState } from 'react';
import '../css/Home.css';

const SingleProduct = ({singleProduct, addToCart}) => {
    console.log(singleProduct);

    const [buttonText, setButtonText] = useState("ADD TO CART");

    const handleAddToCart = () => {

        setButtonText("ADDED TO CART")
        addToCart(singleProduct);
        return 
    }
    return (
        <div className="product-container">
               <div className="item-info">
                  <img className="product-img" src={singleProduct.Img} alt="product-img"/>
                    <div className="info">{singleProduct.Name}</div>
                    <div className="info">Rs.&nbsp;{singleProduct.Amount}</div>
                    <div style={{cursor: 'pointer'}} 
                    onClick={handleAddToCart}
                    className="add">{buttonText}</div>
                </div>
            </div>
    )
}

export default SingleProduct;