import React, {createContext, useState} from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {},
    itemsCount: 0,
})



const addCartItems = (cartItems, productToAdd) => {
    // if item exist return new array with item quantity incremented by one
    const existingCartItem = cartItems.find((item) => {
        return item.id === productToAdd.id
    } )
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    // add new item
    return [...cartItems, {...productToAdd, quantity: 1}]

}


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [ itemsCount, setItemsCount ] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))

}
    const addToCount = () => {
        setItemsCount(cartItems.reduce((prev, current) => prev + current, itemsCount) )
}


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemsCount, addToCount}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}