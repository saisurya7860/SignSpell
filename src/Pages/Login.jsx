import React, { useState } from 'react';
import { BsGoogle } from "react-icons/bs";  

const Login = () => {
    const [signUp,setSignup] = useState(false);

    const toggleVisibility = () =>{
        setSignup(!signUp);
    }
    

  return (
    <>    
    <div className= {signUp?"hidden":"flex items-center justify-center min-h-screen "}>
        <div className='lg:max-w-[700px] md:max-w-[650px] max-w-[300px] w-full min-h-[450px]  rounded-3xl bg-white flex items-center justify-between md:min-h-[500px]'>
        {/* signin left section */}
            <div className='flex flex-col items-center gap-5 justify-center w-full'>
                <div className='lg:text-[2.8rem] text-[2.3rem] font-bold'> Sign In</div>
                <input type="email" name="" id="" className=' px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none' required placeholder='Email' />
                <input type="password" name="" id="" placeholder='Password' required className='px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none' />
                <p className='text-indigo-500 text-md  text-md font-semibold cursor-pointer'>Forgot password?</p>
                <button className='bg-indigo-500 text-white py-2 px-4  cursor-pointer rounded-sm font-bold'>SIGN IN</button>
                <div className='text-gray-400 text-sm font-semibold '>Dont have an account? 
                    <span className='text-indigo-500 cursor-pointer' onClick={()=>{toggleVisibility()}}> SignUp</span>
                </div>  
            </div>
            {/* rightsection */}
            <div className='hidden md:flex flex-col items-center justify-center gap-8 bg-indigo-500 lg:min-w-[380px] md:min-w-[320px]  min-h-[500px] rounded-l-[70px] rounded-r-3xl'>
                <div className='lg:text-[2.8rem] text-[2.4rem] text-white font-bold'>Welcome back!</div>
                <div className='text-gray-400 text-md w-[200px] lg:w-[300px] text-center font-semibold'>To continue using our services,
                please log in back to your account</div>
                <button className='bg-transparent border-2 text-white  py-2 px-4 cursor-pointer rounded-sm font-bold' onClick={()=>{toggleVisibility()}}>SIGN UP</button>
            </div>
        </div>
    </div>

    {/* Sign Up page Section */}

    <div className={signUp?"flex items-center justify-center min-h-screen ":"hidden"}>
          <div className='lg:max-w-[700px] md:max-w-[650px] max-w-[300px] w-full min-h-[450px]  rounded-3xl bg-white flex items-center justify-between md:min-h-[500px]'>
          {/* signin left section */}
              <div className='hidden md:flex flex-col items-center justify-center gap-8 bg-indigo-500 lg:min-w-[380px] md:min-w-[320px]  min-h-[500px] rounded-l-3xl rounded-r-[70px]'>
                  <div className='lg:text-[2.8rem] text-[2.4rem] text-white font-bold'>Welcome!</div>
                  <div className='text-gray-400 text-md w-[200px] lg:w-[300px] text-center font-semibold'>Create your own account to use all of our site features</div>
                  <button className='bg-transparent border-2 text-white  py-2 px-4 cursor-pointer rounded-sm font-bold' onClick={()=>{toggleVisibility()}}>SIGN IN</button>
              </div>
              {/* rightsection */}
              <div className='flex flex-col items-center gap-5 justify-center w-full'>
                  <div className='lg:text-[2.8rem] text-[2.3rem] font-bold'>Sign Up</div>
                  <input type="text" name="" id="" placeholder='name' required className='py-1.5 px-5 pl-2 border-gray-400 border-2 rounded-sm outline-none'/>
                  <input type="email" name="" id="" className=' py-1.5 px-5 pl-2 border-gray-400 border-2 rounded-sm outline-none' required placeholder='Email' />
                  <input type="password" name="" id="" placeholder='Password' required className='px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none' />
                  <input type="password" name="" id="" placeholder='Confirm Password' required className='px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none' />
                  <button className='bg-indigo-500 text-white py-2 px-4  cursor-pointer rounded-sm font-bold'>SIGN UP</button>
                  <div className='text-gray-400 text-sm font-semibold '>Already have an account? 
                      <span className='text-indigo-500 cursor-pointer' onClick={()=>{toggleVisibility()}}> Log In</span>
                  </div>
              </div>
          </div>
      </div>

        <a href="www.facebook.com ">facebook</a>

    </>

   
  )
}

export default Login
