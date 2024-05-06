import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './Home.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Profiles from './Profiles.jsx'
import NotFound from './notFoundPage.jsx'
import Profile from './Profile.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFound />
},
{
  path: '/profiles',
  element : <Profiles />,
  children: [
    {
      path: '/profiles/:profileId',
      element: <Profile />
    }
  ]
},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />
  </React.StrictMode>
)
