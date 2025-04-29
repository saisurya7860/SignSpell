import {  createContext,useContext,useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
    const stored = JSON.parse(localStorage.getItem('user'));
    const[user,setUser]=useState(stored);
    
    const login = (email,password) =>{
        if (email === 'admin123@gmail.com' && password === '12345'){
            const userObj = {email};
            setUser(userObj);
            localStorage.setItem('user',JSON.stringify(userObj));
            return true
        }
        return false   
    }

    const logout  =()=>{
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
        <AuthContext.Provider value = {{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const userAuth = () =>{
    return useContext(AuthContext);
} 


