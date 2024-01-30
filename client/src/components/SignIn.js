import React, { useState } from "react";

const SignIn = () => {
    return (
        <div className="h-[90vh] text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-[rgba(255,255,255,0.05)] shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-xl">
                <div className="mt-4 flex flex-col items-center">
                    <h1 className="text-4xl xl:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#f04164] to-[#4b4fad] inline-block text-transparent bg-clip-text">
                        S'inscrire
                    </h1>
                    <div className="w-full flex-1 mt-6">
                        <div className="flex flex-col items-center">

                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="text" name="prenom" placeholder="Prénom" />
                            <input
                                className="w-full px-8 py-2 my-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="text" name="nom" placeholder="Nom" />
                            <input
                                className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" name="mail" placeholder="Email" />
                            <input
                                className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" placeholder="Mot de passe" />
                            <button
                                className="mt-5 tracking-wide font-semibold bg-[rgba(255,255,255,0.2)] rounded-full p-4 hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] inline-block text-gray-100 w-full transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-3">
                                    S'inscrire
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
                                    S'inscrire avec Google
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
                                S'inscrire avec Facebook
                                </span>
                            </button>
                        </div>                      

                        <p className="text-md text-gray-100 text-center mt-6 w-full rounded-md">
                            Je suis déjà inscrit - &nbsp;&nbsp;
                            <a href="/login" class="underline decoration-dotted  hover:font-extrabold hover:bg-gradient-to-r from-[#f04164] to-[#4b4fad] hover:inline-block hover:text-transparent hover:bg-clip-text hover:scale-105">
                                Me connecter
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
    );
};

export default SignIn;