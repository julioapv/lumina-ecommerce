import './ProductDetail.css'
import { AiOutlineClose } from "react-icons/ai";

const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded bg-white'>
            <div className='flex justify-between items-center p-5'>
                <p className='text-3xl font-bold'>Detail</p>
                <button 
                role='button'
                className='text-3xl shadow-custom text-black bg-red-400 rounded hover:bg-red-500 active:bg-red-600 active:scale-95'
                //onClick={}
                >
                <AiOutlineClose />
                </button>
            </div>
        </aside>
    )
}

export { ProductDetail };