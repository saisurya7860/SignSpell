import React, { useState } from 'react'
import aulogo from '../assets/LoginHomeassests/au-logo.svg'
import kcelogo from '../assets/LoginHomeassests/kce-logo-.svg'
import nmlogo from '../assets/LoginHomeassests/nm-logo.svg'
import tnlogo from '../assets/LoginHomeassests/tn-logo.svg'
import bannerbg from '../assets/LoginHomeassests/banner-bg.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    // states for toggle sigin or signup login form
    const [signup, setSignup] = useState(false);
    const toggleVisibility = () => {
        setSignup(!signup);
    };
    // state for visibility of password in sigin and signup loginform
    const [showSignInPassword,setShowSignInPassword] = useState(false);
    const [showSignUpPassword,setShowSignUpPassword] = useState(false);
    const [showSignUpConfirmPassword,setShowSignUpConfirmPassword] = useState(false);

    // States for Sign In fields and error message
    const [signinEmail, setSigninEmail] = useState("test@gmail.com");
    const [signinPassword, setSigninPassword] = useState("12345");
    const [signinError, setSigninError] = useState("");

    // Dummy credentials check on Sign In
    const handleSignIn = (e) => {
      e.preventDefault();
      const dummyEmail = "test@gmail.com";
      const dummyPassword = "12345";
      if (signinEmail === dummyEmail && signinPassword === dummyPassword) {
          console.log("Logged in successfully");
          setSigninError("Valid Credentials");
          navigate('/'); // clear error if any
          // Here you can redirect the user or update state as needed.
      } else {
          setSigninError("invalid username or password");
      }
    };

    const loginData = {
        signup: {
            signupTitle: "Welcome!",
            txt1: "Create your own account to use all of our site features",
            txt2: "SIGN IN",
            txt3: "Sponsored by",
            txt4: "Sign Up",
            txt5: "Already have an account? ",
            txt6: "Log In",
            btn1: "Get Started",
            btn2: "SIGN UP",
            btn3: "SIGN IN",
            inputtags: {
                type: ['name', 'email', 'password', 'password'],
                placeholder: ['Name', 'Email', 'Password', 'Confirm Password'],
            }
        },
        sponsers: {
            logos: [tnlogo, nmlogo, aulogo, kcelogo],
            links: [
                "https://www.tn.gov.in/",
                "https://naanmudhalvan.tn.gov.in/",
                "https://niralthiruvizha.in/",
                "https://www.annauniv.edu/",
                "https://kathir.ac.in/"
            ],
        },
        signin: {
            signInTitle: "Welcome Back!",
            txt1: "Sign In",
            txt2: "Forgot password?",
            txt3: "Sponsored by",
            txt4: "Dont have an account? ",
            txt5: "Sign Up",
            txt6: "To continue using our services please log in back to your account",
            btn1: "SIGN IN",
            btn2: "Get Started",
            btn3: "SIGN UP",
            inputtags: {
                type: ['email', 'password'],
                placeholder: ['Email', 'Password'],
            }
        }
    };

    return (
        <div className="bg-cover bg-center " style={{ backgroundImage: `url(${bannerbg})` }}>
            {/* SIGN UP Section */}
            <div className={signup ? "flex items-center justify-center min-h-screen" : "hidden"}>
                <div className="lg:max-w-[700px] md:max-w-[650px] max-w-full w-full min-h-screen md:flex md:rounded-3xl bg-white items-center justify-between sm:min-h-[500px]">
                    <div className="flex flex-col items-center justify-center gap-8 bg-[#bdf094] lg:min-w-[380px] md:min-w-[320px] min-h-screen md:min-h-[500px] md:rounded-l-3xl md:rounded-r-[70px]">
                        <div className="lg:text-[2.8rem] text-[2.4rem] text-white font-bold">{loginData.signup.signupTitle}</div>
                        <div className="text-black text-md w-[200px] lg:w-[300px] text-center font-semibold">{loginData.signup.txt1}</div>
                        <button className="bg-transparent border-2 text-white flex md:hidden py-2 px-4 cursor-pointer rounded-sm font-bold">{loginData.signup.btn1}</button>
                        <button className="bg-transparent border-2 text-white hidden md:flex py-2 px-4 cursor-pointer rounded-sm font-bold" onClick={toggleVisibility}>{loginData.signup.btn3}</button>
                        <div className="text-sm text-black">{loginData.signup.txt3}</div>
                        <div className="flex space-x-6">
                            {loginData.sponsers.logos.map((logo, index) => (
                                <a href={loginData.sponsers.links[index]} target="_blank" rel="noopener noreferrer" key={index}>
                                    <img src={logo} alt="Sponsor Logo" className="w-12 h-12" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 justify-center min-h-screen md:min-h-[450px] w-full">
                        <div className="lg:text-[2.8rem] text-[2.3rem] font-bold">{loginData.signup.txt4}</div>
                        {loginData.signup.inputtags.type.map((type, index) => {
                            if (type === 'password') {
                                // For the password fields in Sign Up
                                if (index === 2) {
                                    return (
                                        <div className="relative " key={index}>
                                            <input
                                                type={showSignUpPassword ? 'text' : 'password'}
                                                id={`${type}-${index}`}
                                                placeholder={loginData.signup.inputtags.placeholder[index]}
                                                required
                                                className="py-1.5 px-5 pl-2 border-gray-400 border-2 rounded-sm outline-none w-full"
                                            />
                                            <div 
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                                onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                                            >
                                                {showSignUpPassword ? <FaEyeSlash /> : <FaEye />}
                                            </div>
                                        </div>
                                    );
                                } else if (index === 3) {
                                    return (
                                        <div className="relative " key={index}>
                                            <input
                                                type={showSignUpConfirmPassword ? 'text' : 'password'}
                                                id={`${type}-${index}`}
                                                placeholder={loginData.signup.inputtags.placeholder[index]}
                                                required
                                                className="py-1.5 px-5 pl-2 border-gray-400 border-2 rounded-sm outline-none w-full"
                                            />
                                            <div 
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                                onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                                            >
                                                {showSignUpConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </div>
                                        </div>
                                    );
                                }
                            }
                            // For non-password fields (name, email)
                            return (
                                <input
                                    type={type}
                                    key={index}
                                    id={`${type}-${index}`}
                                    placeholder={loginData.signup.inputtags.placeholder[index]}
                                    required
                                    className="py-1.5 px-5 pl-2 border-gray-400 border-2 rounded-sm outline-none"
                                />
                            );
                        })}                       
                        <button className="bg-[#bdf094]  py-2 px-4 cursor-pointer rounded-sm font-bold">{loginData.signup.btn2}</button>
                        <div className="text-gray-400 text-sm font-semibold">
                            {loginData.signup.txt5}
                            <span className="text-indigo-500 cursor-pointer" onClick={toggleVisibility}> {loginData.signup.txt6}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SIGN IN Section */}
            <div className={signup ? "hidden" : "flex items-center justify-center min-h-screen"}>
                <div className="lg:max-w-[700px] md:max-w-[650px] max-w-full w-full min-h-screen md:rounded-3xl bg-white md:flex items-center justify-between sm:min-h-[500px]">
                    {/* Right Section */}
                    <div className="flex flex-col items-center justify-center gap-8 bg-[#bdf094] lg:min-w-[380px] md:min-w-[320px] min-h-screen md:order-2 order-1 md:min-h-[500px] md:rounded-l-[70px] md:rounded-r-3xl">
                        <div className="lg:text-[2.8rem] text-[2.4rem] text-white font-bold">{loginData.signin.signInTitle}</div>
                        <div className="text-black text-md w-[200px] lg:w-[300px] text-center font-semibold">{loginData.signin.txt6}</div>
                        <button className="bg-transparent border-2 text-white py-2 px-4 cursor-pointer md:flex hidden rounded-sm font-bold" onClick={toggleVisibility}>{loginData.signin.btn3}</button>
                        <button className="bg-transparent border-2 text-white py-2 px-4 cursor-pointer md:hidden flex rounded-sm font-bold">{loginData.signin.btn2}</button>
                        <div className="text-sm text-black">{loginData.signin.txt3}</div>
                        <div className="flex space-x-6">
                            {loginData.sponsers.logos.map((logo, index) => (
                                <a href={loginData.sponsers.links[index]} target="_blank" rel="noopener noreferrer" key={index}>
                                    <img src={logo} alt="Sponsor Logo" className="w-12 h-12" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sign In Form */}
                    <div className="flex flex-col order-2 md:order-1 items-center gap-5 justify-center min-h-screen md:min-h-[500px] w-full">
                        <div className="lg:text-[2.8rem] text-[2.3rem] font-bold">{loginData.signin.txt1}</div>
                        {loginData.signin.inputtags.type.map((type, index) => {
                            if (type === 'email') {
                                return (
                                    <input
                                        type={type}
                                        key={index}
                                        id={`${type}-${index}`}
                                        placeholder={loginData.signin.inputtags.placeholder[index]}
                                        className="px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none"
                                        required
                                        value={signinEmail}
                                        onChange={(e) => setSigninEmail(e.target.value)}
                                    />
                                );
                            } else if (type === 'password') {
                                return (
                                    <div className='relative' key={index}>
                                        <input
                                        type={showSignInPassword ? "text" : "password"}
                                        id={`${type}-${index}`}
                                        placeholder={loginData.signin.inputtags.placeholder[index]}
                                        className="px-5 py-1.5 pl-2 border-gray-400 border-2 rounded-sm outline-none"
                                        required
                                        value={signinPassword}
                                        onChange={(e) => setSigninPassword(e.target.value)}
                                        />
                                        <div className='absolute right-0 inset-y-0 pr-3 flex items-center cursor-pointer' onClick={() => setShowSignInPassword(!showSignInPassword)}>
                                            {showSignInPassword ? <FaEye/> : <FaEyeSlash/> }
                                        </div>
                                    </div>  
                                );
                            }
                            return null;
                        })}
                        {signinError && <p className="text-red-500 text-sm">{signinError}</p>}
                        <p className="text-indigo-500 text-md font-semibold cursor-pointer">{loginData.signin.txt2}</p>
                        <button className="bg-[#bdf094]  py-2 px-4 cursor-pointer rounded-sm font-bold" onClick={handleSignIn}>{loginData.signin.btn1}</button>
                        <div className="text-gray-400 text-sm font-semibold">
                            {loginData.signin.txt4}
                            <span className="text-indigo-500 cursor-pointer" onClick={toggleVisibility}>{loginData.signin.txt5}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
