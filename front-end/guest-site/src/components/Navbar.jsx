import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [trans, setTrans] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

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
    <nav
      className={`fixed w-full h-20 top-0 left-0 flex flex-row z-10 px-3 transition-all duration-200 ${
        trans ? 'text-white' : 'text-black bg-white drop-shadow-md'
      }`}
    >
      <div className="w-full items-center p-1 sm:p-2 sm:w-1/3 flex flex-row cursor-pointer">
        <div className="w-full">
          <img className="mr-4 w-[100px] inline" src="./images/logo.png" />
        </div>
      </div>
      <div className="hidden sm:w-1/3 sm:flex sm:flex-row font-[Poppins] font-medium">
        <div
          className={`w-1/3 h-full flex justify-center items-center ${
            activeLink === '/' ? 'text-red-600' : 'text-black'
          }`}
        >
          <span className="cursor-pointer hover:text-[#E62129]">
            <a href="/">Home</a>
          </span>
        </div>
        <div
          className={`w-1/3 h-full flex justify-center items-center ${
            activeLink === '/products' ? 'text-red-600' : 'text-black'
          }`}
        >
          <span className="cursor-pointer hover:text-[#E62129]">
            <a href="/products">Products</a>
          </span>
        </div>
        <div
          className={`w-1/3 h-full flex justify-center items-center ${
            activeLink === '/about-us' ? 'text-red-600' : 'text-black'
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
  );
};

export default Navbar;
