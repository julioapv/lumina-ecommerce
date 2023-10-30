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

    const activeStyle = "bg-red-400 border-2  border-black shadow-custom z-10";
    const activeStyleAccount = "bg-green-400 border-2  border-black shadow-custom z-10";

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

            <ul className="account flex flex-col items-end gap-6 text-xl">
                <li
                className='text-black/60'
                >
                    <NavLink
                    to='/account'
                    className={({ isActive }) => 
                    isActive ? activeStyleAccount : ""
                    }>
                        johndo@gmail.com
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
                <li>
                    <NavLink
                    to='/account'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/Sign-in'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Sign In
                    </NavLink>
                </li>
            </ul>

            <ul className="products grid grid-cols-3 gap-5 mt-10 bg-green-100 2-full text-lg md:text-3xl">
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
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/forniture'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Forniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            </div>
        </nav>
    );
};

export { NavBarMobile };