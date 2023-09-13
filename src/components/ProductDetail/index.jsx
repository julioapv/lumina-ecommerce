import './ProductDetail.css'
import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'
import { AiOutlineClose } from "react-icons/ai";

const ProductDetail = () => {
    const {
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
    } = useContext(ShoppingCartContext)

    return (
        <aside 
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-5'>
                <p className='text-3xl font-bold'>Detail</p>
                <button 
                role='button'
                className='text-3xl shadow-custom text-black bg-red-400 rounded hover:bg-red-500 active:bg-red-600 active:scale-95'
                onClick={() => {
                    closeProductDetail()
                }}
                >
                <AiOutlineClose />
                </button>
            </div>
            <figure className=''>
                <img className='w-full h-full object-contain rounded' 
                src={productToShow.image} 
                alt={productToShow.title} />
            </figure>
            <p>
                <span>{productToShow.title}</span>
                <span>{productToShow.price}</span>
                <span className='truncate'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail };