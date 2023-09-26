import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'
import { OrderCard } from '../OrderCard';
import { AiOutlineClose } from "react-icons/ai";
import './styles.css'

const CheckoutSideMenu = () => {
    const {
        productToShow,
        cartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext)
    console.log(cartProducts);

    return (
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white overflow-y-scroll`}>
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

            {
                cartProducts.map((product) => (
                    <OrderCard 
                    key={product.id} 
                    title={product.title} 
                    price={product.price} 
                    imageUrl={product.image}
                    />
                ))
            }

        </aside>
    )
}

export { CheckoutSideMenu };