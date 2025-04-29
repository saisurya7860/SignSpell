import { useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () =>{
    const navigate = useNavigate();
    const {user} = userAuth();   
    useEffect(()=>{
        if(!user){
            navigate('/register')
        }
    },[!user,navigate]);
    if (!user) {
        return navigate('/register');
      }
    
      // If logged in, render the child routes via <Outlet/>
      return <Outlet />;
}

export default ProtectedRoute