import React, { useState, useEffect } from 'react';
import CustomProgressBarGold from './CustomProgressBarGold';

const QuestionCardGold = ({ question, onAnswerSelected, niveau, currentQuestionIndex, totalQuestions }) => {
    const [selectedChoice, setSelectedChoice] = useState('');
    const totalTime = 1500; // millisecondes
    const [timeLeft, setTimeLeft] = useState(totalTime); 

    useEffect(() => {
        // S'assurer que la question est définie avant de continuer
        if (!question) return;

        setSelectedChoice('');

        setTimeLeft(totalTime);

        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft <= 1) {
                    clearInterval(timer);
                    onAnswerSelected(null); // Appeler avec une valeur pour indiquer une réponse incorrecte
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 10);

        return () => clearInterval(timer);
    }, [question, onAnswerSelected]);

    // Vérifier si la question est définie avant de continuer à rendre le composant
    if (!question) {
        return <div>Question non trouvée.</div>;
    }

    // Fonction pour déterminer la classe en fonction du niveau
    const getNiveauClass = (niveau) => {
        switch (niveau) {
            case 'FACILE':
                return 'absolute z-10 top-[4.5rem] right-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full';
            case 'INTERMEDIAIRE':
                return 'absolute z-10 top-[4.5rem] right-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full';
            case 'DIFFICILE':
                return 'absolute z-10 top-[4.5rem] right-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full';
            default:
                return ''; // Ou une classe par défaut si nécessaire
        }
    };

    const niveauClass = getNiveauClass(niveau);

    return (
        <>
        <div className='relative flex flex-col text-center bg-[rgba(255,255,255,0.02)] z-0 h-[90vh] h-full'>
            <CustomProgressBarGold current={currentQuestionIndex} total={totalQuestions} timeLeft={timeLeft} totalTime={totalTime} />
            <div className={niveauClass}>{niveau}</div>
            <div className='w-full z-0 h-[30vh] mx-auto mb-4 shadow-inner'>
                <img className='w-full h-full object-cover shadow-inner' src={question.image} alt="Question" />
            </div>
            
            <div className='flex flex-col md:mt-10 mt-4 items-center'>
                <h2 className='md:pb-10 pb-4 px-10 md:text-3xl text-lg'>{question.question}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 md:text-2xl md:mt-4 mt-6'>
                    <button className='px-2 buttonGold' onClick={() => onAnswerSelected('A')}><span class="btn-text">{question.choixA}</span></button>
                    <button className='px-2 buttonGold' onClick={() => onAnswerSelected('D')}><span class="btn-text">{question.choixD}</span></button>
                    <button className='px-2 buttonGold' onClick={() => onAnswerSelected('C')}><span class="btn-text">{question.choixC}</span></button>
                    <button className='px-2 buttonGold' onClick={() => onAnswerSelected('B')}><span class="btn-text">{question.choixB}</span></button>
                </div>
            </div>
            <p className='signature pt-10 pb-4 pr-4 text-xs'>Billy Thomont & Andrilalaina Kalaha</p>
        </div>
        </>
    );
}

export default QuestionCardGold;
