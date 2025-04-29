import React,{useState} from 'react';
import logo from '../assets/General/logo.png';
import aulogo from '../assets/LoginHomeassests/au-logo.svg'
import kcelogo from '../assets/LoginHomeassests/kce-logo-.svg'
import nmlogo from '../assets/LoginHomeassests/nm-logo.svg'
import tnlogo from '../assets/LoginHomeassests/tn-logo.svg'
import ntlogo from '../assets/LoginHomeassests/logo.webp'
import bannerbg from '../assets/LoginHomeassests/banner-bg.jpg'
import { FaArrowRight, FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const Register = () => {
    const navigate = useNavigate();
    const [loginPage, setLoginPage] = useState(false);
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleLogin = (e) =>{
        e.preventDefault(); 
        const success = login(email,password);
        if(success){
            navigate('/');
        }
        else{
            alert('Invalid email or password')
        }
    }

    const scrollBtn = () =>{
        const loginSection = document.getElementById('login');
        loginSection?.scrollIntoView({ behavior: 'smooth' });
    }


  return (
    <div className='h-screen flex md:flex-row flex-col'>
        <div className=' flex flex-col h-full min-h-screen justify-evenly items-center md:w-1/2 bg-blue-400 p-4'>
            <div className='flex flex-col justify-center items-center gap-2 mt-10'>
                <img src={logo} alt="" className='w-30 h-30'/> 
                <div className='font-bold text-3xl'>SignSpell</div>
                <div className='flex flex-col gap-10 m-4 md:mt-10 items-center'>
                    <div className='text-gray-50 text-2xl md:text-3xl font-bold text-center'>Where voices become 
                        <span className='text-blue-700 text-2xl md:text-3xl font-bold'> Signs</span> ,
                        <div className='text-center'>no one is left behind</div>
                    </div>
                    
                    <div className='max-w-130 text-center text-sm text-gray-700 font-normal '>Empower every voice — join SignSpell in creating a world where signs speak louder than words.</div>
                    <button onClick={()=> scrollBtn()} className='bg-gray-50 py-1.5 px-3 rounded-3xl md:hidden flex items-center gap-1 text-blue-400 font-semibold'>Log In/Sign Up <p className='font-light'><FaArrowRight/></p> </button>
                </div>
            </div>
          
           <div className='flex flex-col items-center mt-10 gap-5'>
               <div className='text-gray-600 text-sm'>Sponsored by</div>
               <div className='flex gap-5'>
                    <img src={tnlogo} alt="" className='w-11 h-11' />
                    <img src={nmlogo} alt="" className='w-11 h-11' />
                    <img src={ntlogo} alt="" className='w-11 h-11' />
                    <img src={aulogo} alt="" className='w-11 h-11' />
                    <img src={kcelogo} alt="" className='w-11 h-11' />
               </div>
           </div>
        </div> 
         {/*login page right  */}
        
        {!loginPage && (<div id="login" className='md:w-1/2 min-h-screen h-full flex flex-col justify-center items-center bg-gray-50 p-4'>    
            <p className='text-blue-400 text-center'>Move to login page Register page is still under development</p>
            <div className='flex flex-col justify-start items-start gap-2 '>
                <p className='text-3xl font-semibold'>Create Account</p> 
                <p className='text-sm  font-medium'>Start your SignSpell Experience.</p>
            </div>
           
            <div className="flex flex-col w-full max-w-xs mt-4">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input type="text" id="name" className="border w-full border-gray-300 rounded-md p-2 mb-4" placeholder="Enter your name" required />
            </div>

           <div className="flex flex-col w-full max-w-xs mt-4">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input type="email" id="email" className="border w-full border-gray-300 rounded-md p-2 mb-4" placeholder="Enter your email" required />
            </div>
            <div className="flex flex-col w-full max-w-xs mt-4 ">
                <label htmlFor="password" className="text-gray-700">Password</label>
                <input type="password" id="password" className="border border-gray-300 rounded-md p-2 mb-4" placeholder="Enter your password" required />
            </div>
            <div className="flex flex-col w-full max-w-xs mt-4">
                <label htmlFor="confirm-password" className="text-gray-700">Confirm Password</label>
                <input type="password" id="confirm-password" className="border border-gray-300 rounded-md p-2 mb-4" placeholder="Confirm your password" required />
            </div>
            <button className='bg-blue-500 text-white w-full max-w-xs py-2 rounded-md cursor-pointer'>Register</button>
            <div className='mt-4'>
                Already have an account? <span onClick={() => setLoginPage(!loginPage)}  className='text-blue-500 cursor-pointer'>Login</span>
           </div>
           
        </div>)}

        {loginPage && (<div className='md:w-1/2 min-h-screen h-full flex flex-col justify-center items-center bg-gray-50 p-4'>    
            <div className='flex flex-col justify-start items-start gap-2 '>
                <p className='text-3xl font-semibold'>Login Account</p> 
                <p className='text-sm  font-medium'>Start your SignSpell Experience.</p>
            </div>
           <form onSubmit={handleLogin} className='w-full flex flex-col max-w-xs'>
                <div className="flex flex-col w-full max-w-xs mt-4">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border w-full border-gray-300 rounded-md p-2 mb-4" placeholder="Enter your email" required />
                </div>

                <div className="flex flex-col w-full max-w-xs mt-4 ">
                    <label htmlFor="password" className="text-gray-700">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md p-2 mb-4" placeholder="Enter your password" required />
                </div>
                    
                <button onClick={(e) => handleLogin(e)} type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer'>Login</button>
            </form>
            <div className='mt-4'>
                Already have an account? <span href="/login"  onClick={() => setLoginPage(!loginPage)}  className='text-blue-500 cursor-pointer'>Register</span>
            </div>

           
        </div>)}

    </div>
    
  );
};

export default Register;
