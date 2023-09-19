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
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-5 bg-blue-200 shadow-sm border-b-black border-b-[1px]'>
                <p className='text-2xl font-bold'>Details</p>
                <button 
                role='button'
                className='text-3xl shadow-custom text-black bg-red-400 hover:bg-red-500 active:bg-red-600 active:scale-95'
                onClick={() => {
                    closeProductDetail()
                }}
                >
                <AiOutlineClose />
                </button>
            </div>

            <p className='p-5 text-xl text-center'>
                <span>{productToShow.title}</span>
                
                <span className='font-bold text-2xl flex items-center justify-center'>
                    <span className='text-green-700'>$</span>
                    <span className=''>{productToShow.price}</span>
                </span>
            </p>

            <figure className='h-3/4 p-5 border-black border-t-[1px]'>
                <img className='w-full h-full object-contain rounded' 
                src={productToShow.image} 
                alt={productToShow.title} />
            </figure>
            
            <p className='mt-2 px-5 py-5 text-center border-black border-t-[1px]'>
            <span className=''>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail };