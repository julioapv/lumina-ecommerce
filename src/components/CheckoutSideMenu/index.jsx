import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'
import { OrderCard } from '../OrderCard';
import { AiOutlineClose } from "react-icons/ai";
import { totalPrice } from '../../utils';
import './styles.css'

const CheckoutSideMenu = () => {
    const {
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    return (
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-5 bg-blue-200 shadow-sm border-b-black border-b-[1px]'>
                <p className='text-2xl font-bold'>Checkout</p>
                
                <div className={`${cartProducts.length > 0 ? 'flex' : 'hidden'} text-xl truncate`}>
                    <p>
                        Total: <span className='font-semibold'>${totalPrice(cartProducts)}</span>
                    </p>
                </div>

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

            <div className='overflow-y-scroll'>
            {
                cartProducts.map((product) => (
                    <OrderCard 
                    key={product.id}
                    id={product.id} 
                    title={product.title} 
                    price={product.price} 
                    imageUrl={product.image}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export { CheckoutSideMenu };