import { Layout } from '../../components/Layout'
import { Card } from '../../components/Card'

const Home = () => {
    return (
        <Layout>
            Home
            <div className='flex gap-3'>
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </Layout>
    );
};

export { Home };
