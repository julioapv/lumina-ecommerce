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
    
    // Get products by search value
    const [searchValue, setSearchValue] = useState(null)

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

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

    const filteredProductsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, products, searchValue, searchByCategory) => {
        if(searchType === 'by-title' ) {
            return filteredProductsByTittle(products, searchValue)
        }

        if(searchType === 'by-category' ) {
            return filteredProductsByCategory(products, searchByCategory)
        }

        if(searchType === 'by-title-and-category' ) {
            return filteredProductsByCategory(products, searchByCategory).filter((product) => (
                product.title.toLowerCase().includes(searchValue.toLowerCase())
            ))
        }

        if(!searchType ) {
            return products
        }
    }

    useEffect(() => {
        if (searchByCategory && searchValue) setFilteredProducts(filterBy('by-title-and-category',products, searchValue, searchByCategory))
        if (searchValue && !searchByCategory) setFilteredProducts(filterBy('by-title',products, searchValue, searchByCategory))
        if (searchByCategory && !searchValue) setFilteredProducts(filterBy('by-category',products, searchValue, searchByCategory))
        if (!searchByCategory && !searchValue) setFilteredProducts(filterBy(null ,products, searchValue, searchByCategory))
    }, [products, searchValue, searchByCategory])

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
            setFilteredProducts,
            searchByCategory, 
            setSearchByCategory
        }}>
        { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }