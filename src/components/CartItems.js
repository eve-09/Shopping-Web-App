import React from 'react'
import SingleCartItem from './SingleCartItem';

export const CartItems = ({cartItem, IncQty, DecQty, GetTotal}) => {

    return cartItem.map((Item) => (

            <SingleCartItem 
            key={Item.ID} 
            Item={Item}
            IncQty={IncQty}
            DecQty={DecQty}
            GetTotal={GetTotal}
            />
        
    ))
}

export default CartItems;