import { AiOutlineClose } from "react-icons/ai";

const OrderCard = (props) => {
    const { id, title, price, imageUrl, handleDelete} = props

    let renderAiOutlineClose
    if(handleDelete) {
        renderAiOutlineClose = <AiOutlineClose
                                className='text-xl ml-2 shadow-custom text-black bg-violet-400 hover:bg-violet-500 active:bg-violet-600 active:scale-95'
                                onClick={() => handleDelete(id)}
                                />
    }

    return (
        <div className="flex justify-between items-center p-2 border-black border-b-[1px]">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded object-contain p-1" 
                    src={imageUrl} alt={title} />    
                </figure> 
            </div>
            <div className="flex justify-between items-center">
                <p className="text-md font-light w-40 line-clamp-1">{title}</p>  
            </div>
            <div className="flex justify-between items-center">   
                <p className="text-xl font-bold">${price}</p>
                <span >
                    {
                        renderAiOutlineClose
                    }
                </span>
            </div>
        </div>
    )
}

export { OrderCard }