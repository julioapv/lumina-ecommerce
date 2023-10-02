import { AiOutlineClose } from "react-icons/ai";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts} = props

    return (
        <div className="flex justify-between items-center mb-3 border-black border-[1px]">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>

            <p>

            </p>
        </div>
    )
}

export { OrdersCard }