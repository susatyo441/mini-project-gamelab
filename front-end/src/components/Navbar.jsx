import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [trans, setTrans] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const [navState, setNavState] = useState(false)

    const toggleNav = () => {
        setNavState(!navState)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setTrans(true);
            } else {
                setTrans(false);
            }
        };

        const handleActiveLink = () => {
            setActiveLink(window.location.pathname);
        };

        if (window.location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        handleActiveLink();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed w-full h-20 top-0 left-0 flex flex-row z-40 px-3 transition-all duration-200 ${trans ? 'text-white' : 'text-black bg-white drop-shadow-md'
                    }`}
            >
                <div className="w-full items-center p-1 sm:p-2 sm:w-1/3 flex flex-row cursor-pointer" >
                    <div className="w-full">
                        <img className="mr-4 w-[100px] inline" src="/images/logo.png" />
                    </div>
                </div>
                <div className={`block sm:hidden h-full text-white ${trans ? '' : 'bg-red-600 hover:bg-red-800'} text-4xl py-5 px-4 cursor-pointer z-30`} onClick={toggleNav}>
                    <i className='bi bi-filter-left rounded-md'></i>
                </div>
                <div className="hidden sm:w-1/3 sm:flex sm:flex-row font-[Poppins] font-medium">
                    <div
                        className={`w-1/3 h-full flex justify-center items-center ${activeLink === '/' ? 'text-red-600' : 'text-black'
                            }`}
                    >
                        <span className="cursor-pointer hover:text-[#E62129]">
                            <a href="/">Home</a>
                        </span>
                    </div>
                    <div
                        className={`w-1/3 h-full flex justify-center items-center ${activeLink === '/products' ? 'text-red-600' : trans ? 'text-white' : 'text-black'
                            }`}
                    >
                        <span className="cursor-pointer hover:text-[#E62129]">
                            <a href="/products">Products</a>
                        </span>
                    </div>
                    <div
                        className={`w-1/3 h-full flex justify-center items-center ${activeLink === '/about-us' ? 'text-red-600' : trans ? 'text-white' : 'text-black'
                            }`}
                    >
                        <span className="cursor-pointer hover:text-[#E62129]">
                            <a href="/about-us">About Us</a>
                        </span>
                    </div>
                </div>
                <div className="hidden sm:w-1/3 sm:flex sm:flex-row p-4 items-center font-[Poppins]">
                    <div className="w-full flex justify-end ">
                        <a
                            href="https://api.whatsapp.com/send?phone=6289531728616"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-0 bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-[50px]"
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </nav>
            <div className={`flex flex-col font-[Poppins] p-2 items-center justify-center w-full fixed z-50 top-20 left-0 bg-white transition-all ${navState ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
                <div className={`p-2 hover:bg-red-600 hover:text-white w-full text-center`}><a href="/">Home</a></div>
                <div className={`p-2 hover:bg-red-600 hover:text-white w-full text-center`}><a href="/products">Products</a></div>
                <div className={`p-2 hover:bg-red-600 hover:text-white w-full text-center`}><a href="/about-us">About Us</a></div>
                <hr />
                <div className="p-2 hover:bg-red-600 hover:text-white w-full text-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=6289531728616"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
