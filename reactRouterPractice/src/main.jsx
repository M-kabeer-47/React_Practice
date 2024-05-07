import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import HomePage from './HomePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ProductsPage from './productsPage.jsx'
import Products from './Products.jsx'
import Blog from './Blog.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />
},
{
  path: "/products",
  element: <ProductsPage />,
  children: [{
    path: "/products/:category",
    element: <Products />
  }]
},{
  path: "/blog",
  element: <Blog/>
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />    
    </React.StrictMode>,
)
