import React from 'react'
import Login from './Pages/Login'
import './index.css';
import Register from './Pages/Register';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import ConvertSign from './Pages/ConvertSign';
import Settings from './Pages/Settings';
import Sidebar from './Components/Sidebar';
import Docs from './Pages/Docs';
import VideoInput from './Pages/VideoInput';

// Simple protected route component


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Home/>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path:"/learnsign",
      element:<>
      <Sidebar/>
      <LearnSign/>
      </>
    },
    {
      path:"/convertsign",
      element:<>
      <Sidebar/>
      <ConvertSign/>
      </>     
    },
    {
      path:"/setting",
      element:<>
      <Sidebar/>
      <Settings/>
      </>
    },
    {
      path:"/docs",
      element:<>
      <Sidebar/>
      <Docs/>
      </>
    },
    {
      path:"/videoinput",
      element:<>
      <Sidebar/>
      <VideoInput/>
      </> 
    }
  ]);

  return (
    <div className='pb-[1300px]  Montserrat'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
