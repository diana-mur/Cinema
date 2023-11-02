import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Entry from './Entry/Entry'
import Registration from './Registration/Registration'
import RecoverPass from './RecoverPass/RecoverPass'
import CreatePass from './RecoverPass/CreatePass/CreatePass'
import Home  from './Home/Home'
import Test from './Test'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/entry',
        element: <Entry />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/recoverpass',
        element: <RecoverPass />
    },
    {
        path: '/recoverpass/createpass',
        element: <CreatePass /> 
    },
    {
        path: '/test',
        element: <Test /> 
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
