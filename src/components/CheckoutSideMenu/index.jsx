import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'
import { AiOutlineClose } from "react-icons/ai";
import './styles.css'

const CheckoutSideMenu = () => {
    const {
        productToShow,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext)

    return (
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-5 bg-blue-200 shadow-sm border-b-black border-b-[1px]'>
                <p className='text-2xl font-bold'>Checkout</p>
                <button 
                role='button'
                className='text-3xl shadow-custom text-black bg-red-400 hover:bg-red-500 active:bg-red-600 active:scale-95'
                onClick={() => {
                    closeCheckoutSideMenu()
                }}
                >
                <AiOutlineClose />
                </button>
            </div>

            <p className='p-5 text-xl text-center'>
                <span>{productToShow.title}</span>
                
                <span className='font-bold text-2xl flex items-center justify-center'>
                    <span className='text-green-700'>$</span>
                    <span className=''>{productToShow.price}</span>
                </span>
            </p>
        </aside>
    )
}

export { CheckoutSideMenu };