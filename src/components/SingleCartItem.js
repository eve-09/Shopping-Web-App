import React from 'react';
import '../css/Home.css';
import db from '../config/Config'
import {Icon} from 'react-icons-kit';
import {plus} from 'react-icons-kit/fa/plus';
import {minus} from 'react-icons-kit/fa/minus';
import {ic_delete} from 'react-icons-kit/md/ic_delete';


export const SingleCartItem = ({Item, IncQty, DecQty, Del}) => {

    const handleIncQty = () => {
        IncQty(Item);
    }

    const handleDecQty = () => {
        DecQty(Item);
    }

    const handleDel = () => {
        db.collection('cart').doc(Item.ID).delete().then(() => {
            console.log('Product deleted from Cart')
        })
    }

    return (
        <div className="cart-container">
            <div className="cartitem">
                <img className="product-img" src={Item.Img} alt="product-img"/>
                <br />
                <div className="c info">
                    {Item.Name} 
                    <br/>
                    Rs.&nbsp;{Item.TotalPrice}
                 </div>
                 <br />
                <div className="qty">
                    <Icon icon={minus} size={25} className="icon minus" onClick={handleDecQty}/>
                    <div className="info c">{Item.Quantity}</div>
                    <Icon icon={plus} size={25} className="icon plus" onClick={handleIncQty}/>
                </div>
                <div>
                    <br></br>
                    <Icon icon={ic_delete} size={30} className="icon remove" onClick={handleDel}/>
                </div>
            </div>
        </div>
    )
}

export default SingleCartItem;