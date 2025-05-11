import { HashRouter,Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Register from './Pages/Register';
import LearnSign from './Pages/LearnSign';
import ConvertSign from './Pages/ConvertSign';
import Settings from './Pages/Settings';
import Docs from './Pages/Docs';
import Profile from './Pages/Profile';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <div className='Montserrat'>
      <HashRouter>
        <Routes>
          <Route  path="/register" element={<Register />}></Route>
          <Route  path="/docs" element={<Docs />}></Route>
          <Route element={<ProtectedRoute/>}>
            <Route element={<Layout/>}>
              <Route  path="/" element={<Home />}></Route>
              <Route  path="/learnsign" element={<LearnSign />}></Route>
              <Route  path="/convertsign" element={<ConvertSign />}></Route>
              <Route  path="/setting" element={<Settings />}></Route>
              <Route  path="/profile" element={<Profile />}></Route>
              <Route  path="/register" element={<Register />}></Route>
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
