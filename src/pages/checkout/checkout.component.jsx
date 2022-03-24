import React, { useContext } from 'react';
import {CartContext} from "../../contexts/cart-context";
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)
    return(
        <div>
            <h1>I am the checkout component</h1>
            <div>
                {
                    cartItems.map(item => {
                        const { id, name, quantity } = item
                        return(
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br/>
                                <span onClick={() => { removeItemFromCart(item)}}>decrement</span>
                                <br/>
                                <span onClick={() => addItemToCart(item)}>increment</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout;