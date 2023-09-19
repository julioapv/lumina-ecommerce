import { useState, createContext } from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    const [productToShow, setProductToShow] = useState({})

    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
        { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }