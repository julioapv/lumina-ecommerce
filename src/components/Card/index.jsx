const Card = (data) => {
    return (
        <div className="bg-white cursor-pointer w-56 h-96 rounded border-black border-2 hover:shadow-custom">
            <figure className='relative mb-4 w-full h-4/5 p-4 border-black border-b-2'>
                <img className="w-full h-full object-cover rounded-sm border-black border-[1px]" src={data.data.images[0]} alt="dress" />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-purple-400 w-8 h-8 rounded-bl-lg border-black border-b-[1px]" role="button">+</button>
            </figure>

            <div className='flex justify-between px-2'>
                <div className='flex flex-col'>
                    <span className='text-base font-light'>{data.data.title}</span>
                    <span className='text-xs font-light'>{data.data.category.name}</span>
                </div>
                <span className='text-lg font-bold'>{`$${data.data.price}`}</span>
            </div>
        </div>
    )
}

export { Card }