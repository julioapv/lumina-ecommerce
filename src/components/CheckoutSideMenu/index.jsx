import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext} from '../../Context'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import './styles.css'

const CheckoutSideMenu = () => {
    const {
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        order,
        setOrder
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '28.09.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
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

            <div className={`${!cartProducts.length > 0 ? 'flex' : 'hidden'} text-center h-full flex-col text-xl justify-center items-center`}>
                <p>Nothing here yet, try adding a prodcut to the shopping cart using the button </p>
                <AiOutlinePlus className=' mt-2 w-10 h-10 flex justify-center items-center text-black font-bold bg-purple-400  border-black border-[1px]' />
            </div>

            <div className='overflow-y-scroll flex-1'>
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

            <Link to='/Orders/last'>
                <button
                onClick={() => handleCheckout()}
                className={`${cartProducts.length > 0 ? 'block' : 'hidden'} bg-black text-white text-2xl py-3 font-bold w-full`}
                >
                    Checkout
                </button>
            </Link>

        </aside>
    )
}

export { CheckoutSideMenu };