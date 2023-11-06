import {AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineRight  } from "react-icons/ai";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts, date} = props

    return (
        <div className="flex items-center justify-center mb-5 cursor-pointer w-full">
            <div className="border-black p-4 rounded border-[1px] w-80">
                <div className="flex justify-between w-full">
                    <span className="flex flex-col justify-center  items-start gap-1 text-xl">
                        <span className="flex gap-1 justify-start items-center">
                            <AiOutlineCalendar className="font-bold"/>
                            {date}
                        </span>
                        <span className="flex gap-1 justify- items-center">
                            <AiOutlineShoppingCart className="font-bold"/>
                            {totalProducts}
                        </span>
                    </span>

                    <span className="flex items-center gap-1 text-2xl font-bold">
                            <span>$</span>
                            {totalPrice}
                            <AiOutlineRight className="text-purple-500 font-extrabold" />
                    </span>
                </div>
            </div>
        </div>

    )
}

export { OrdersCard }