import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

const Card = (data) => {
    const {
        count, 
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        isProductDetailOpen,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    } = useContext(ShoppingCartContext)
    
    const showProduct = (productDetail) => {
        openProductDetail()
        closeCheckoutSideMenu()
        setProductToShow(productDetail)
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <span 
                className="absolute top-0 right-0 flex justify-center items-center text-black font-bold bg-amber-200 w-8 h-8 rounded-bl-lg border-black border-b-[1px]"
                >
                    <AiOutlineCheck />
                </span>
            )
        } else {
            return (
                <button 
                className="absolute top-0 right-0 flex justify-center items-center text-black font-bold bg-purple-400 hover:bg-purple-500 active:bg-purple-600 w-8 h-8 rounded-bl-lg border-black border-b-[1px]"
                role="button"
                onClick={(event) => {
                    addProductToCart(event, data.data)
                    if (!isProductDetailOpen) {
                        return
                    } else {
                        closeProductDetail()
                    }
                }}
                >
                <AiOutlinePlus />
                </button>
            )
        }
    }

        return (
        <div 
        className="bg-white cursor-pointer w-60 h-96 rounded border-black border-2 hover:shadow-custom"
        onClick={() => {
            showProduct(data.data)
        }}
        >
            <figure className='relative mb-2 w-full h-4/5 p-4 border-black border-b-2'>
                <img className="w-full h-full object-contain rounded-sm border-black border-[1px] p-2" src={data.data.image} alt="dress" />
                <span className='absolute bottom-0 left-0 bg-purple-200 px-1 border-black border-[1px] border-b-0 hover:bg-purple-300'>{data.data.category}</span>
                {renderIcon(data.data.id)}
            </figure>

            <div className='flex justify-between p-2'>   
                <span className='text-base font-light truncate'>{data.data.title}</span>
                <span className='text-lg font-bold left-10'>{`$${data.data.price}`}</span>
            </div>
        </div>
    )
}

export { Card }