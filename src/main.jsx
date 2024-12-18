import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layOut/Layout'
import Home from './components/Home'
import Signin from './components/Signin'
import Signout from './components/Signout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element:<Home></Home> 
      },
      {
        path: '/signin',
        element:<Signin></Signin>
      },
      {
        path:'/signout',
        element:<Signout></Signout>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
