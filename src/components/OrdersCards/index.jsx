import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineRight  } from "react-icons/ai";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts, date} = props

    return (
        <div className="flex justify-between items-center mb-3 border-black  px-1 rounded border-[1px]">
            <AiOutlineClose />
            <p className="flex p-2 gap-3 text-lg">
                <span className="flex items-center gap-1">
                    <AiOutlineShoppingCart className="text-xl"/>
                    <span className="">{totalProducts}</span>
                </span>
                <span className="flex items-center gap-1">
                    <span className=""><span className="text-xl">$</span>{totalPrice}</span>
                </span>
                <span className="flex items-center gap-1">
                    <AiOutlineCalendar className="text-xl"/>
                    <span className="">{date}</span>
                </span>
            </p>
            <AiOutlineRight />
        </div>

    )
}

export { OrdersCard }