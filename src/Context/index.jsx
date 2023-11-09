import { useState, createContext, useEffect } from 'react';

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

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false)
    }

    //Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)

    const [filteredByCategories, setFilteredByCategories] = useState(null)

    // Get products by search value
    const [searchValue, setSearchValue] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        })
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const filteredProductsByTittle = (products, searchValue) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    useEffect(() => {
        if (searchValue) setFilteredProducts(filteredProductsByTittle(products, searchValue))
    }, [products, searchValue])

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            products,
            setProducts,
            searchValue,
            setSearchValue,
            filteredProducts, 
            setFilteredProducts
        }}>
        { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }