import './product-card.styles.scss'
import Button from "../button/Button.components";
import React from "react";
import {useContext} from 'react'

import {CartContext} from '../../contexts/cart-context';

const ProductCard = ({product}) => {

    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addItemToCartHandler = () => {
        addItemToCart(product)
    }

    return (
       <div className={'product-card-container'}>
           <img src={imageUrl} alt={`${name}`}/>
           <div className="footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
           </div>
           <Button buttonType={'inverted'} onClick={addItemToCartHandler}>Add</Button>
       </div>

    )
}

export default ProductCard;