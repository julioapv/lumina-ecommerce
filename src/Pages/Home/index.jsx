import { useState, useEffect, useContext } from 'react';
import { Layout } from '../../components/Layout'
import { Card } from '../../components/Card'
import { ProductDetail } from '../../components/ProductDetail';



const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        })
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
            {
                // products?.map((item) => (
                //     <Card key={item.id} data={item} />
                // ))
            }
            </div>
            <ProductDetail />
        </Layout>
    );
};

export { Home };
