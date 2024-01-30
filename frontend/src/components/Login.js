import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className="text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-[rgba(255,255,255,0.05)] shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-xl">
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-4xl xl:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#f04164] to-[#4b4fad] inline-block text-transparent bg-clip-text">
                            Se connecter
                        </h1>
                        <div className="w-full flex-1 mt-10">
                            <div className="flex flex-col items-center">

                            <div className="mx-auto max-w-xs">
                                <input
                                    className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                
                                <div className='relative'>
                                    <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Mot de passe"
                                        />
                                        <button
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                    
                                
                                    
                                    
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-[rgba(255,255,255,0.2)] rounded-full p-4 hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] inline-block text-gray-100 w-full transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className='w-6 h-6 fill-white svg-icons' style={{strokeWidth:"200px"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z"  /></svg>
                                    <span className="ml-1">
                                        Se connecter
                                    </span>
                                </button>

                                <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    ou
                                    </p>
                                </div>

                            </div>
                                   


                            <button
                                    className="w-full max-w-xs shadow-sm rounded-lg py-3 bg-[rgba(255,255,255,0.1)] hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-[rgba(0,0,0,0.4)] p-2 rounded-full">
                                    <svg className='w-5 ' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/><path d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/></svg>
                                    </div>
                                    <span className="ml-4">
                                        Se connecter avec Google
                                    </span>
                                </button>

                                <button
                                    className="w-full max-w-xs shadow-sm rounded-lg py-3 bg-[rgba(255,255,255,0.1)] hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-[rgba(0,0,0,0.4)] p-2 rounded-full">
                                    <svg className='w-5 hover:fill-blue-500' viewBox="1 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path>
                                    </svg>
                                    </div>
                                    <span className="ml-4">
                                        Se connecter avec Facebook
                                    </span>
                                </button>
                            </div>                      

                            <p className="text-md text-gray-100 text-center mt-6 w-full rounded-md">
                                Pas encore inscrit ?&nbsp;&nbsp;
                                <a href="/signin" class="underline decoration-dotted  hover:font-extrabold hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] hover:inline-block hover:text-transparent hover:bg-clip-text hover:scale-105">
                                    cliquez ici
                                </a>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(./images/loginTrophy.jpg)'}} />
                </div>
            </div>
        </div>

  )
}

export default Login