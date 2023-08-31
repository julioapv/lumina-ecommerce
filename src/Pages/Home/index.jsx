import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout'
import { Card } from '../../components/Card'

const Home = () => {
    const [products, setProducts] = useState(null) 

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
            {
                products?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            }
            </div>
        </Layout>
    );
};

export { Home };
