import "./cart-dropdown.styles.scss";
import React from 'react';

import Button from "../button/Button.components";
import { useContext} from 'react';
import { CartContext} from "../../contexts/cart-context";
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className={'cart-dropdown-container'} >
            <div className="cart-items">
                {cartItems.map((item) => {
                   return <CartItem key={item.id} cartItem={item}/>
                })}
            </div>
            <Link to='/checkout'><Button>Go to checkout</Button></Link>

        </div>
    )
}

export default CartDropdown;