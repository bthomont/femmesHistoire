import React from "react";

const Header = () => {
    
    return (
        <>
        <a href="/">
            <div className='flex flex-row items-center align-middle h-[10vh] bg-[#15172c] p-4 header shadow-xl'>
                <img src="./images/logo.png" width={"60px"}/>
                <p className="px-2 text-xl uppercase" ><span className="font-bold">| Femmes</span> d'histoire</p>
            </div>    
        </a>        
        </>
    );
};

export default Header;
