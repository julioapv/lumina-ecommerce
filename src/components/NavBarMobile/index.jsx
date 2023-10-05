import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCartContext } from "../../Context";

const NavBarMobile = () => {

    const {
        cartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    } = useContext(ShoppingCartContext)

    const activeStyle = "bg-red-400 rounded-full border-2 border-black px-5 py-2 shadow-custom z-10";

    return (
        <nav className="flex flex-col fixed top-0 w-full">
            <ul className="products flex items-center gap-6">
                <li className="font-bold text-xl tracking-widest">
                    <NavLink
                    to='/'
                    >
                    Lumina
                    </NavLink>
                </li>
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
            <ul className="account flex items-center gap-6">
                <li
                className='text-black/60'
                >
                johndo@gmail.com
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
                <li 
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => (
                    isCheckoutSideMenuOpen ? closeCheckoutSideMenu() : openCheckoutSideMenu()
                )}
                >
                <AiOutlineShoppingCart 
                className="text-black text-lg font-bold"
                />
                <div className="font-bold">{cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export { NavBarMobile };