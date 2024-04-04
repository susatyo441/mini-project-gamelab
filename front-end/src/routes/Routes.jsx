import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Products from '../pages/Products'
import About from '../pages/About'
import MainLayout from '../layouts/MainLayout'
import Order from '../pages/Order'

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/order-now',
                element: <Order />
            }
        ]
    }
])

export default Routes