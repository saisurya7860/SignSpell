import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import LearnSign from './Pages/LearnSign';
import ConvertSign from './Pages/ConvertSign';
import Settings from './Pages/Settings';
import Docs from './Pages/Docs';
import VideoInput from './Pages/VideoInput';
import Sidebar from './Components/Sidebar';
import Profile from './Pages/Profile';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/learnsign",
    element: (
      <>
        <Sidebar />
        <LearnSign />
      </>
    ),
  },
  {
    path: "/convertsign",
    element: (
      <>
        <Sidebar />
        <ConvertSign />
      </>
    ),
  },
  {
    path: "/setting",
    element: (
      <>
        <Sidebar />
        <Settings />
      </>
    ),
  },
  {
    path: "/docs",
    element: (
      <>
        <Sidebar />
        <Docs />
      </>
    ),
  },
  {
    path: "/videoinput",
    element: (
      <>
        <Sidebar />
        <VideoInput />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Sidebar />
        <Profile/>
      </>
    ),
  },
]);

const App = () => {
  return (
    <div className='pb-[800px] bg-[#f5f7f2] Montserrat'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
