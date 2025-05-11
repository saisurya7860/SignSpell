import { useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () =>{
    const navigate = useNavigate();
    const {user} = userAuth();
    const [loading, setLoading] = useState(true);   
    useEffect(()=>{
        if(!user){
            navigate('/register')
        }else {
            setLoading(false);
        }
    }, [user, navigate]);
    
    
    if (loading) return null;
    
      // If logged in, render the child routes via <Outlet/>
      return <Outlet />;
}

export default ProtectedRoute
