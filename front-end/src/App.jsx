import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

const App = () => {
    window.baseAPI = 'https://api.carolynn.my.id'
    return <RouterProvider router={Routes}/>
}

export default App