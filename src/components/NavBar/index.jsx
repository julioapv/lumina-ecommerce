import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCartContext } from "../../Context";
import logo from '../../assets/lumina.svg'

const NavBar = () => {

    const {
        cartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        searchByCategory, 
        setSearchByCategory
    } = useContext(ShoppingCartContext)

    const activeStyle = "bg-red-400 rounded-full border-2 border-black px-5 py-2 shadow-custom z-10";

    return (
        <nav className="flex justify-between items-center fixed top-0 w-full py-5 px-8 text-base z-1 bg-[#dbe1ea] border-black border-b-2">
            <ul className="products flex items-center gap-6">
                <li className="font-bold text-xl tracking-widest">
                    <NavLink
                    to='/'
                    onClick={() => {
                        setSearchByCategory("")
                    }}
                    >
                    <div className="flex items-center gap-2">
                        <img 
                        className="w-14"
                        src={logo} 
                        alt="lumina" />
                        <p className="font-bold text-2xl tracking-widest">Lumina</p>
                    </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={() => {
                        setSearchByCategory("")
                    }}
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothing'
                    onClick={() => {
                        setSearchByCategory("men's clothing")
                    }}
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={() => {
                        setSearchByCategory("electronics")
                    }}
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/jewelery'
                    onClick={() => {
                        setSearchByCategory("jewelery")
                    }}
                    className={({ isActive }) => 
                    isActive ? activeStyle : ""
                    }>
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            <ul className="account flex items-center gap-6">
                <li
                className='text-black/60'
                >
                johndoe@gmail.com
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

export { NavBar };