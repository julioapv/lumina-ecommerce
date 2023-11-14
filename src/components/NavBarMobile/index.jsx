import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { ShoppingCartContext } from "../../Context";
import logo from '../../assets/lumina.svg'

const NavBarMobile = () => {

    const {
        cartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    } = useContext(ShoppingCartContext)


    const [showNavBarMobile, setShowNavBarMobile] = useState(false)

    const handleShowNavBarMobile = () => {
            setShowNavBarMobile(!showNavBarMobile)
        }

    const activeStyle = "bg-red-400 rounded-full border-2 border-black px-5 py-2 shadow-custom z-10";

    return (
        <nav className="flex flex-col fixed top-0 w-full">
            
            <div className="flex justify-between items-center p-5 bg-[#dbe1ea]">
                <NavLink
                to='/'
                >
                    <div className="flex items-center gap-2">
                        <img 
                        className="w-14"
                        src={logo} 
                        alt="lumina" />
                        <p className="font-bold text-2xl tracking-widest">Lumina</p>
                    </div>
                </NavLink>
                <span className="flex gap-1 items-center">
                    <AiOutlineShoppingCart 
                    onClick={() => (
                        isCheckoutSideMenuOpen ? closeCheckoutSideMenu() : openCheckoutSideMenu()
                    )}
                    className="text-black text-3xl font-bold"
                    />
                    <div
                    className={`${cartProducts.length === 0 ? 'hidden' : 'block' } font-semibold text-xl`} 
                    >{cartProducts.length}</div>
                    <AiOutlineMenu 
                className="text-3xl"
                onClick={() => handleShowNavBarMobile()}
                />
                </span>
            </div>

            <div className={`${showNavBarMobile ? 'block' : 'hidden' } flex-col w-full h-full bg-white p-5`}>

            <ul className="account flex flex-col items-center gap-6 text-xl">
                <li
                className='text-black/60'
                >
                    <NavLink
                    to='/account'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        johndoe@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/orders'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        My orders
                    </NavLink>
                </li>
            </ul>

            <ul className="products grid grid-cols-2 text-center gap-5 mt-10 2-full text-lg md:text-3xl">
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/forniture'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Jewelery
                    </NavLink>
                </li>
            </ul>

            </div>
        </nav>
    );
};

export { NavBarMobile };