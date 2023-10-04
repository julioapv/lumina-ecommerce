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
            <div className='flex items-center justify-center relative mt-5 w-80'>
                <h1>My orders</h1>
            </div>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/orders/${index}`}>
                        <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                        date={order.date}
                        />
                    </Link>
                ) 
                )
            }
        </Layout>
    );
};

export { Orders };