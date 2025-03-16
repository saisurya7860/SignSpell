import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LearnSign from './Pages/LearnSign';
import ConvertSign from './Pages/ConvertSign';
import Settings from './Pages/Settings';
import Docs from './Pages/Docs';
import VideoInput from './Pages/VideoInput';
import Sidebar from './Components/Sidebar';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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
]);

const App = () => {
  return (
    <div className='pb-[1300px] Montserrat'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
