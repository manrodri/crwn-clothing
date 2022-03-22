import React, {createContext, useState} from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {}
})

const addCartItems = (cartItems, productToAdd) => {

    // if item exist return new array with item quantity incremented by one
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id )
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quatity: cartItem.quantity + 1} : cartItem
        )
    }
    // add new item
    return [...cartItems, {...productToAdd, quantity: 1}]

}


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))

}
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}