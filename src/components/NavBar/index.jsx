import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = "bg-red-400 rounded-full border-2 border-black px-5 py-2 shadow-custom z-2";

    return (
        <nav className="flex justify-between items-center fixed w-full py-5 px-8 text-base z-1 bg-[#dbe1ea] border-black border-2">
            <ul className="products flex items-center gap-6">
                <li className="font-bold text-xl">
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
                >
                🛒 0
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };