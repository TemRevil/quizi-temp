import React from 'react';
import { UserAnswer } from '../types';

interface FinalResultCardProps {
    total: number;
    onRestart: () => void;
    userAnswers: UserAnswer[];
}

export const FinalResultCard: React.FC<FinalResultCardProps> = ({ total, onRestart, userAnswers }) => {
    const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
    const incorrectAnswers = userAnswers.filter(a => !a.isCorrect);

    return (
        <div className="text-center p-2 sm:p-4 w-full flex flex-col items-center max-h-[70vh]">
            <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-xl mb-4" style={{ color: 'var(--muted-foreground)' }}>
                Your final score is: <strong className="font-bold" style={{ color: 'var(--foreground)' }}>{correctAnswers}</strong> out of <strong style={{ color: 'var(--foreground)' }}>{total}</strong>
            </p>
            
            {incorrectAnswers.length > 0 ? (
                <>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Review your mistakes:</h3>
                    <div className="w-full overflow-y-auto my-4 p-4 rounded-lg text-left" style={{ backgroundColor: 'var(--muted)'}}>
                        {incorrectAnswers.map((answer, index) => (
                            <div key={answer.questionId} className="p-4 rounded-lg mb-3" style={{ backgroundColor: 'var(--card)', boxShadow: 'var(--shadow-sm)'}}>
                                <p className="font-bold">{index + 1}. {answer.question}</p>
                                <div className="mt-2 text-sm space-y-1">
                                    <p style={{ color: 'var(--incorrect-fg)' }}>
                                        Your answer: {answer.userAnswer} ❌
                                    </p>
                                    <p style={{ color: 'var(--correct-fg)' }}>
                                        Correct answer: <strong>{answer.correctAnswer}</strong> ✅
                                    </p>
                                    <p className="pt-2" style={{ color: 'var(--muted-foreground)' }}>
                                        <strong>Explanation:</strong> {answer.englishExplanation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p className="text-lg font-semibold mt-6" style={{color: 'var(--correct-fg)'}}>
                    Congratulations! You answered all questions correctly! 🎉
                </p>
            )}
            
            <button
                onClick={onRestart}
                className="w-full sm:w-auto font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4"
                style={{
                    backgroundColor: 'var(--accent-theme)',
                    color: 'white',
                    boxShadow: 'var(--shadow)'
                }}
            >
                Restart Quiz
            </button>
        </div>
    );
};