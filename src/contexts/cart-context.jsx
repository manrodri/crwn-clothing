import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
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


const removeCartItems = (cartItems, productToRemove) => {
    // find item
    const existingCartItem = cartItems.find((item) => {
        return item.id === productToRemove.id
    } )
    // if item is equal to one remove item form cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== productToRemove.id)
    }
    // return cart items (new array) with reduce quantity

     return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
}



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [ cartCount, setCartCount ] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))

}

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItems(cartItems, productToRemove))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])



    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}