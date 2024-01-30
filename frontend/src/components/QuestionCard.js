import React, { useState, useEffect } from 'react';
import CustomProgressBar from './CustomProgressBar';

const QuestionCard = ({ question, onAnswerSelected, niveau, currentQuestionIndex, totalQuestions }) => {
    const [selectedChoice, setSelectedChoice] = useState('');

    // Réinitialiser le choix sélectionné chaque fois que la question change
    useEffect(() => {
        setSelectedChoice('');
    }, [question]);

    if (!question) {
        return <div>Question non trouvée.</div>;
    }

    // Fonction pour déterminer la classe en fonction du niveau
    const getNiveauClass = (niveau) => {
        switch (niveau) {
            case 'FACILE':
                return 'absolute z-10 top-6 right-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full';
            case 'INTERMEDIAIRE':
                return 'absolute z-10 top-6 right-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full';
            case 'DIFFICILE':
                return 'absolute z-10 top-6 right-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full';
            default:
                return ''; // Ou une classe par défaut si nécessaire
        }
    };

    const niveauClass = getNiveauClass(niveau);

    return (
        <>
        <div className='relative flex flex-col text-center bg-[rgba(255,255,255,0.02)] z-0 h-[90vh] h-full'>
            <CustomProgressBar current={currentQuestionIndex} total={totalQuestions} />
            <div className={niveauClass}>{niveau}</div>
            <div className='w-full z-0 h-[30vh] mx-auto mb-4 shadow-inner'>
                <img className='w-full h-full object-cover shadow-inner' src={question.image} alt="Question" />
            </div>
            
            <div className='flex flex-col md:my-10 my-4 items-center'>
                <h2 className='md:pb-10 pb-4 px-10 md:text-3xl text-lg'>{question.question}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 md:text-2xl md:mt-4 mt-6'>
                    <button className='px-2 button' onClick={() => onAnswerSelected('A')}><span class="btn-text">{question.choixA}</span></button>
                    <button className='px-2 button' onClick={() => onAnswerSelected('D')}><span class="btn-text">{question.choixD}</span></button>
                    <button className='px-2 button' onClick={() => onAnswerSelected('C')}><span class="btn-text">{question.choixC}</span></button>
                    <button className='px-2 button' onClick={() => onAnswerSelected('B')}><span class="btn-text">{question.choixB}</span></button>
                </div>
            </div>
            <p className='signature pb-2 pr-4 text-xs'>Billy Thomont & Andrilalaina Kalaha</p>
        </div>
        </>
    );
}

export default QuestionCard;
