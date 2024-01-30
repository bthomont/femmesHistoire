import React, { useState } from "react";
import QuizContainer from "./QuizContainer";
import QuizContainerGold from "./QuizContainerGold";

const Home = () => {
    // État pour contrôler l'affichage de QuizContainer
    const [showQuiz, setShowQuiz] = useState(false);
    const [showChallenge, setShowChallenge] = useState(false);

    const startQuiz = () => {
        setShowQuiz(true);
        setShowChallenge(false);
    };

    const startChallenge = () => {
        setShowChallenge(true);
        setShowQuiz(false);
    };

    if (showQuiz) {
        return <QuizContainer />;
    } else if (showChallenge) {
        return <QuizContainerGold />;
    }

    return (
        <>
            <div className='relative flex flex-col text-center z-0 h-full'>
                <div className='flex flex-col lg:h-[90vh] justify-center items-center text-center p-10 '>
                    <p className='lg:text-8xl text-4xl font-extrabold mb-6 uppercase bg-gradient-to-r from-[#f04164] to-[#4b4fad] inline-block text-transparent bg-clip-text'>Participer au jeu quiz </p>
                    <p className="lg:text-xl text-sm text-xl mb-10">Plongez dans les récits captivants des femmes qui ont façonné notre histoire.
                        <br />Que vous cherchiez à apprendre ou à concourir pour le prix, deux chemins s'offrent à vous :</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-xl mb-10'>
                        <div className="flex flex-col text-justify p-10 bg-[rgba(0,0,0,0.15)] rounded-xl">
                            <p className="font-bold text-4xl my-4">Explorer et Apprendre</p>
                            <p> Laissez-vous guider par votre curiosité et découvrez les histoires fascinantes des pionnières qui ont laissé leur empreinte sur le monde. Parfait pour une expérience ludique et enrichissante sans la pression du score.</p>
                            <button className='px-2 button mt-6' onClick={startQuiz}>Commencer</button>
                        </div>

                        <div className="flex flex-col text-justify p-10 bg-[rgba(0,0,0,0.15)] rounded-xl">
                            <p className="font-bold text-4xl my-4">Concours</p>
                            <p>Pour les esprits compétitifs, participez à notre concours et testez vos connaissances pour avoir une chance de gagner des récompenses. Chaque bonne réponse vous rapproche du prix !</p>
                            <button className='px-2 buttonGold mt-6' onClick={startChallenge}>Commencer</button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4">
                    <p className='text-sm'>©Copyright 2024 | <a href="#">Les mentions légales</a></p>
                </div>
            </div>
        </>
    );
};

export default Home;
