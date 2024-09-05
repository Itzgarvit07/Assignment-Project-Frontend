import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainOutlet from './MainOutlet'
import Home from '../Pages/Home/Index'
import AboutUs from '../Pages/AboutUs/Index'
import Blog from '../Pages/Blog/Index'
import Services from '../Pages/Services/Index'
import ContactUs from '../Pages/ContactUs/Index'


const Router =() => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainOutlet/>,
            errorElement:"not found",
            children:[
                {
                    path:'/',
                    element:<Home/>,
                    index:true,
                },
                {
                    path:'/about',
                    element:<AboutUs/>,
                },
                {
                    path:'/blog',
                    element:<Blog/>,
                },
                {
                    path:'/services',
                    element:<Services/>,
                },
                {
                    path:'/contactus',
                    element:<ContactUs/>,
                },
            ],
        },
    ])
    
  return <RouterProvider router={router} />
}

export default Router