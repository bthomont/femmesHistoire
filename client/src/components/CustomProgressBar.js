import React from "react";

const CustomProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <>
            <div className="w-full">
                <div className="progressBar h-2 text-xs font-medium text-center z-10 rounded-tr-full rounded-br-full shadow-4xl" style={{ width: `${percentage}%`}}/>
            </div>         
            <p className='absolute left-0 top-6 ml-2 text-md z-10 px-3 py-1 bg-[rgba(0,0,0,0.2)] rounded-full tewt-white'>Question {current} / {total}</p>
        </>
    );
};

export default CustomProgressBar;
