import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Layout } from '../../components/Layout'
import { Card } from '../../components/Card'
import { ProductDetail } from '../../components/ProductDetail';
import { AiOutlineSearch } from "react-icons/ai";



const Home = () => {

    const {
        products,
        searchValue,
        setSearchValue,
        filteredProducts, 
    } = useContext(ShoppingCartContext)

    const renderView = () => {
        if (searchValue?.length > 0) {
            if (filteredProducts?.length > 0) {
                return (
                    filteredProducts?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                )

            } else {
                return (
                    <div>Not found :(</div>
                )
            }
        } else {
            return (
                    products?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mt-5 mb-4'>
                <h1 className='font-medium text-2xl md:text-3xl'>
                    Find your ideal product
                </h1>
            </div>
            <div className='flex justify-center items-center mb-5 gap-1 relative cursor-pointer'>
                <AiOutlineSearch className='absolute top-5 left-2' />
                <input 
                type="text" 
                placeholder='Search here' 
                className='rounded border border-black sm:w-50 md:w-80 p-4 pl-7 focus:outline-purple-500 focus:outline-2'
                onChange={(event) => setSearchValue(event.target.value)}
                />
            </div>
            <div 
            className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg'
            >
            {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    );
};

export { Home };
