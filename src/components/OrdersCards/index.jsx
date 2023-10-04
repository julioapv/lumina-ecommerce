import { AiOutlineClose } from "react-icons/ai";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts, date} = props

    return (
        <div className="flex justify-between items-center mb-3 border-black border-[1px]">
            <p>
                <span>{date}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>

            <p>

            </p>
        </div>
    )
}

export { OrdersCard }