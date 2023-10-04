import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext} from '../../Context'
import { Layout } from "../../components/Layout";
import { OrderCard } from '../../components/OrderCard';
import { AiOutlineLeft } from "react-icons/ai";



const Order = () => {
    
    const {
        closeCheckoutSideMenu,
        order,
    } = useContext(ShoppingCartContext)

    useEffect(() => {
        closeCheckoutSideMenu()
    }, [])

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = order?.length - 1


    return (
        <Layout>
            <div className='flex items-center justify-center relative mt-5 w-80'>
                <Link to='/orders' className='absolute left-0'>
                    <AiOutlineLeft
                    className='h-6 w-6 text-black cursor-pointer'
                    />
                </Link>
            <h1 className="text-center text-5xl font-bold mb-5"
            >
                My order</h1>
            </div>
            <div className='flex flex-col w-4/5'>
            {
                order?.[index]?.products.map(product => (
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