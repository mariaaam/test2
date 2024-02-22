import React from 'react'
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Portofolio from './Component/Portofolio/Portofolio';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


export default function App() {
  let Router= createBrowserRouter([
    {path:'' ,element: <Layout/>  ,
  children:[
    {index:"home" , element : <Home/>},
    {path:"about" , element : <About/>},
    {path:"portofolio" ,element:<Portofolio/>},
    {path :"contact" , element:<Contact/>}
  ]}
  ])
  
  return (
    <>
   <RouterProvider router={Router}></RouterProvider>
    </>
  )
}