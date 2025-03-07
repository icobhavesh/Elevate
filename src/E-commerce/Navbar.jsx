
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from './ReactRedux/SearchSlice/SearchSlice';

const Navbar = () => {
    const cartItems = useSelector((state) => state.Cart.items);
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <>
            <header className="text-white bg-slate-800 w-full h-auto">
                <div className="max-w-[1280px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-2xl">WatchMe</span>
                    </Link>

                    <nav className="w-full md:w-auto md:ml-auto flex flex-wrap items-center text-base justify-center text-white capitalize font-serif font-bold hover:text-sky-400 cursor-pointer shadow-md p-4">
                        <input
                            className="border-2 mx-10 rounded-md text-black   outline-none border-slate-400 bg-slate-100  px-2 py-1"
                            placeholder="Search..."
                            type="text"
                            onChange={handleSearchChange}
                        />
                        <Link to="/" className="mr-5 hover:text-blue-900">
                            Home
                        </Link>
                        <Link to="/about" className="mr-5 hover:text-blue-900">
                            About
                        </Link>
                        <Link to="/contact" className="mr-5 hover:text-gray-900">
                            Contact
                        </Link>
                        <Link to="/addCart" className="hover:text-blue-900">
                            Cart {cartItems.length > 0 ? cartItems.length : null}
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
