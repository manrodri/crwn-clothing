import "./cart-dropdown.styles.scss";
import React from 'react';

import Button from "../button/Button.components";
import { useContext} from 'react';
import { CartContext} from "../../contexts/cart-context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className={'cart-dropdown-container'} >
            <div className="cart-items">
                {cartItems.map((item) => {
                   return <CartItem key={item.id} cartItem={item}/>
                })}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;