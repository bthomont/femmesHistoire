import React, { useState, useEffect } from 'react';
import QuestionCardGold from './QuestionCardGold';
import ScoreDisplay from './ScoreDisplay';
import questionsData from './json/quiz.json';

const QuizContainerGold = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random()).slice(0, 20);
        setQuestions(shuffledQuestions.map(question => ({
            ...question,
            image: question.image === "images/default.jpg" ? "images/defaultGold.jpg" : question.image
        })));
        setCurrentQuestionIndex(0);
        setScore(0);
    }, []);

    const handleAnswer = (answer) => {
        if (questions[currentQuestionIndex].correct === answer) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div>
            {!quizFinished ? (
                <>
                    <QuestionCardGold
                        question={questions[currentQuestionIndex]}
                        onAnswerSelected={handleAnswer}
                        niveau={questions[currentQuestionIndex] ? questions[currentQuestionIndex].niveau : ""}
                        currentQuestionIndex={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                    />
                </>
            ) : (
                <>
                    <ScoreDisplay score={score} totalQuestions={questions.length} />
                </>

            )}
        </div>
    );
}

export default QuizContainerGold;
