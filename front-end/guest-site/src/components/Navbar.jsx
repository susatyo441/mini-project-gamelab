import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [trans, setTrans] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setTrans(true)
            } else {
                setTrans(false)
            }
        }

        if (window.location.pathname == '/') {
            window.addEventListener('scroll', handleScroll)
            handleScroll()
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`z-50 fixed w-full h-20 top-0 left-0 flex flex-row z-10 transition-all duration-200 ${trans ? 'text-white' : 'text-black bg-white drop-shadow-md'}`}>
            <div className="w-full items-center ml-3 p-1 sm:p-2 sm:w-1/3 flex flex-row cursor-pointer">
                <div className="w-full">
                    <img className="mr-4 w-[100px] inline" src="./images/logo.png" />
                </div>
            </div>
            <div className={`block sm:hidden h-full text-white ${trans ? '' : 'bg-red-600 hover:bg-red-800'} text-4xl py-5 px-4 cursor-pointer z-30`} onClick={{}}>
                <i className='bi bi-filter-left rounded-md'></i>
            </div>
            <div className="hidden sm:w-1/3 sm:flex sm:flex-row font-[Poppins] font-medium">
                <div className="w-1/3 h-full flex justify-center items-center">
                    <span className='cursor-pointer hover:text-[#E62129]'><a href="/profil">Home</a></span>
                </div>
                <div className="w-1/3  h-full flex justify-center items-center ">
                    <span className='cursor-pointer hover:text-[#E62129]'>Products</span>
                </div>
                <div className="w-1/3 h-full flex justify-center items-center ">
                    <span className='cursor-pointer hover:text-[#E62129]'>About Us</span>
                </div>
            </div>
            <div className="hidden sm:w-1/3 sm:flex sm:flex-row p-4 items-center font-[Poppins]">
                <div className="w-full flex justify-end ">
                    <button className='border-0 bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-[50px]'>Order Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar