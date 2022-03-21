import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext}  from 'react'
import { CartContext } from "../../contexts/cart-context";

import React from "react";

const CartIcon =  () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        console.log("cart clicked")
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>10</span>
        </div>
    )
}

export default CartIcon;