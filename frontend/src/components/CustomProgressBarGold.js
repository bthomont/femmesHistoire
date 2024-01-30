import React from "react";

const CustomProgressBarGold = ({ current, total, timeLeft, totalTime  }) => {
    const percentage = (timeLeft / totalTime) * 100;
    const percentageInversed = 100 - percentage;
    const timeLeftSecondes =  Math.round(timeLeft / 100)

    return (
        <>
            <div className="w-full">
            <p className='relative py-2 px-2 bg-gradient-to-r from-transparent to-[rgba(0,0,0,0.8)] timer text-xl text-right tewt-white shadow-inner shadow-4xl'>Temps restant {timeLeftSecondes} secondes</p>
                <div className="progressBarGold h-2 text-xs font-medium text-center z-10 rounded-tr-full rounded-br-full shadow-4xl" style={{ width: `${percentageInversed}%`}}/>
            </div>
            <p className='absolute left-0 top-[4.5rem] ml-2 text-md z-10 px-3 py-1 bg-[rgba(0,0,0,0.2)] rounded-full tewt-white'>Question {current} / {total}</p>
        </>
    );
};

export default CustomProgressBarGold;
