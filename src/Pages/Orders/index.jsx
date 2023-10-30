import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext} from '../../Context'
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCards";


const Orders = () => {
    const {
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        order,
        setOrder
    } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex items-center justify-center relative mt-8 mb-5 w-80'>
                <h1 className='text-3xl font-bold'>My orders</h1>
            </div>
            <div className='w-full flex flex-col p-5'>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/orders/${index}`}>
                        <OrdersCard
                        totalProducts={order.totalProducts}
                        totalPrice={order.totalPrice}
                        date={order.date}
                        />
                    </Link>
                ) 
                )
            }
            </div>
        </Layout>
    );
};

export { Orders };