import React, {useEffect, useState} from 'react';
import db from '../config/Config';
import Nav from './Nav';
import CartItems from './CartItems';
import '../css/Home.css';
import { CartSummary } from './CartSummary';
// import { CartSummary } from './CartSummary';

const Cart = () => {

    const [cartItem, setCartItem] = useState([]);

        useEffect(() => {
            db.collection('cart').onSnapshot(snapshot => {
                const newCartItem = snapshot.docs.map((doc) => ({
                    ID: doc.id,
                    ...doc.data(),
                }));

                setCartItem(newCartItem);
            })
        }, [])

        console.log(cartItem);

        let Product;
        const IncQty = (Item) => {
            console.log(Item);

            Product = Item;
            Product.Quantity = Product.Quantity + 1;
            Product.TotalPrice = Product.Quantity*Product.Amount;

            db.collection('cart').doc(Item.ID).update(Product).then(() => {
                console.log('Quantity Increased by 1');
            })
        }

        const DecQty = (Item) => {
            console.log(Item);

            Product = Item;
            if(Product.Quantity > 1) {
                Product.Quantity = Product.Quantity - 1;
                Product.TotalPrice = Product.Quantity*Product.Amount;

                db.collection('cart').doc(Item.ID).update(Product).then(() => {
                console.log('Quantity Decreased by 1');
                }
            )}
        }

        const GetTotal = () => {
            db.collection('cart').orderBy('Quantity').get().then(
                (snapshot) => {
                    let total = 0;
                    snapshot.forEach(doc => {
                        db.collection('cart').doc(doc.id).update({ position: total});
                        total += 1;
                    });
                }
            )
        }
        

    return (
        <div className="page-container">
            <Nav></Nav>
            <br></br>
            <h1 className="title">YOUR CART</h1>
            
            
            <CartSummary />

            <br />
            {cartItem.length > 0 && (
                <div className="container">
                    <div className="container-fluid">
                        <CartItems 
                            cartItem={cartItem} 
                            IncQty={IncQty}
                            DecQty={DecQty}
                            GetTotal={GetTotal}
                        />
                    </div>
                </div>
            )}
            {cartItem.length <1 && (
                <div className="loading">
                    Your Cart Is Empty
                </div>
            )}

        </div>
    )
}

export default Cart;