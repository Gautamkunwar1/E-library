import React, { useEffect, useState } from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/UseAuthStore';
import Logo from './Logo';

function Navbar() {
    const { user, logout } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/login');
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Books', path: '/books' },
        { link: 'Contact', path: '/contact' },
    ];

    return (
        <header className="w-full bg-transparent fixed top-0 right-0 z-50 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 backdrop-blur-lg" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <Logo />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-12 items-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className="text-base text-black font-medium uppercase hover:text-[#917dc9] hover:font-bold"
                                >
                                    {item.link}
                                </Link>
                            </li>
                        ))}
                        {user ? (
                            <li className="flex items-center gap-2 text-black font-semibold text-base uppercase hover:text-[#917dc9] hover:font-bold cursor-pointer">
                                <span>WELCOME, {user?.name?.toUpperCase()}</span>
                                <button onClick={handleLogout} className="cursor-pointer ml-2">
                                / LOGOUT
                                </button>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" className="text-black font-medium hover:text-[#917dc9]">
                                    LOGIN
                                </Link>
                            </li>
                        )}
                    </ul>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isMenuOpen ? (
                                <FaXmark className="h-5 w-5" />
                            ) : (
                                <FaBarsStaggered className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-[#7bd3ae] text-white z-40 transition-all duration-300 ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="block text-base uppercase hover:text-yellow-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.link}
                            </Link>
                        ))}

                        <div className="mt-4 border-t border-white pt-4">
                            {user ? (
                                <div className="text-yellow-200 font-bold space-y-1">
                                    <div>WELCOME, {user?.name?.toUpperCase()}</div>
                                    <button
                                        onClick={handleLogout}
                                        className="underline hover:text-yellow-300"
                                    >
                                        LOGOUT
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block text-white hover:text-yellow-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    LOGIN
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
