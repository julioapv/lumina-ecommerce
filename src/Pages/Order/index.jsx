import { useContext } from "react";
import { ShoppingCartContext} from '../../Context'
import { Layout } from "../../components/Layout";
import { OrderCard } from '../../components/OrderCard';

const Order = () => {
    
    const {
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        order,
        setOrder
    } = useContext(ShoppingCartContext)

    closeCheckoutSideMenu()

    return (
        <Layout>
            My order

            <div className='overflow-y-scroll flex-1'>
            {
                order?.slice(-1)[0].products.map((product) => (
                    <OrderCard 
                    key={product.id}
                    id={product.id} 
                    title={product.title} 
                    price={product.price} 
                    imageUrl={product.image}
                    />
                ))
            }
            </div>
        </Layout>
    );
};

export { Order };