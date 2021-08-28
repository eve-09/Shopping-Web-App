import React from 'react'

export const CartSummary = ({GetTotal}) => {
    

    return (
        <div>
            <div className="cart-box">
                <div className="cart-summary">CART SUMMARY</div>
                <div className="total">Total Items: &nbsp; </div>
                <div className="total">Total Amount: &nbsp;</div>
            </div>
        </div>
    )
}
