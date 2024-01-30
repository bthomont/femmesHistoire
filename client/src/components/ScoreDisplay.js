import React from 'react';

const ScoreDisplay = ({ score, totalQuestions }) => {
    return (
            <div>
                <div className='relative flex flex-col bg-[rgba(255,255,255,0.02)] z-0 h-[90vh]'>
                <div className='w-full z-0 overflow-hidden mx-auto mb-4 shadow-inner'>
                    <img className='w-full object-cover' src={'./images/default.jpg'} alt="Question" />
                </div>
                    <div className='flex flex-col h-[60vh] justify-center items-center text-center'>
                        <p className='text-6xl'>Votre score <br /><span className='text-8xl font-bold'>{score}/{totalQuestions}</span></p>
                        <p>Vous avez reçu un total de {score * 10} points</p>
                    </div>
                </div>
            </div>

    );
}

export default ScoreDisplay;
