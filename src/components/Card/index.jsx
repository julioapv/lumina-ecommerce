import { useContext } from 'react'
import { ShoppingCartContext} from '../../Context'

const Card = (data) => {
    const {
        count, 
        setCount,
    } = useContext(ShoppingCartContext)
    

        return (
        <div 
        className="bg-white cursor-pointer w-60 h-96 rounded border-black border-2 hover:shadow-custom"
        >
            <figure className='relative mb-2 w-full h-4/5 p-4 border-black border-b-2'>
                <img className="w-full h-full object-contain rounded-sm border-black border-[1px]" src={data.data.image} alt="dress" />
                <span className='absolute bottom-0 left-0 bg-purple-200 px-1 border-black border-[1px]'>{data.data.category}</span>
                <button 
                className="absolute top-0 right-0 flex justify-center items-center bg-purple-400 hover:bg-purple-500 active:bg-purple-600 w-8 h-8 rounded-bl-lg border-black border-b-[1px]" role="button"
                onClick={() => {
                    setCount(count + 1)
                }}
                >
                    +
                </button>
            </figure>

            <div className='flex justify-between p-2'>   
                <span className='text-base font-light truncate'>{data.data.title}</span>
                <span className='text-lg font-bold left-10'>{`$${data.data.price}`}</span>
            </div>
        </div>
    )
}

export { Card }