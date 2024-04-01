import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <footer className='bg-red-600 min-h-48'>
                
            </footer>
        </>
    )
}

export default MainLayout