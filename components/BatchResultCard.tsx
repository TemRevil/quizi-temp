import React from 'react';

interface BatchResultCardProps {
    score: number;
    total: number;
    onContinue: () => void;
}

export const BatchResultCard: React.FC<BatchResultCardProps> = ({ score, total, onContinue }) => {
    const percentage = Math.round((score / total) * 100);
    let message = '';
    if (percentage === 100) {
        message = "Excellent! Perfect score on this section.";
    } else if (percentage >= 70) {
        message = "Great job on this section!";
    } else {
        message = "Keep going! Every question is a learning opportunity.";
    }

    return (
        <div className="text-center p-4 w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-2">Batch Complete!</h2>
            <p className="text-xl mb-4" style={{ color: 'var(--muted-foreground)' }}>
                Your score for this section: <strong className="font-bold" style={{ color: 'var(--foreground)' }}>{score}</strong> out of <strong style={{ color: 'var(--foreground)' }}>{total}</strong>
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--accent-theme)' }}>{message}</p>
            
            <button
                onClick={onContinue}
                className="w-full sm:w-auto font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                    backgroundColor: 'var(--accent-theme)',
                    color: 'white',
                    boxShadow: 'var(--shadow)'
                }}
            >
                Continue
            </button>
        </div>
    );
};