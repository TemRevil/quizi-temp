import React, { useMemo } from 'react';
import { QuizQuestion } from '../types';

interface QuizCardProps {
    type: string;
    question: string;
    options: string[];
    onSelectAnswer: (answer: string) => void;
    onHelpClick: () => void;
    selectedAnswer: string | null;
    correctAnswer: string;
    onNext: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const QuizCard: React.FC<QuizCardProps> = ({ type, question, options, onSelectAnswer, onHelpClick, selectedAnswer, correctAnswer, onNext }) => {
  
  const shuffledOptions = useMemo(() => {
    if (options.length === 2 && options.includes('True') && options.includes('False')) {
        return options;
    }
    return shuffleArray(options)
  }, [options]);

  const getButtonStyles = (option: string) => {
    if (!selectedAnswer) {
      return {
        backgroundColor: 'var(--muted)',
        color: 'var(--accent-foreground)',
        boxShadow: 'var(--shadow-sm)'
      };
    }

    const isCorrect = option === correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) {
      return {
        backgroundColor: 'var(--correct-bg)',
        color: 'var(--correct-fg)',
        boxShadow: 'var(--shadow)',
        transform: 'scale(1.05)'
      };
    }

    if (isSelected && !isCorrect) {
      return {
        backgroundColor: 'var(--incorrect-bg)',
        color: 'var(--incorrect-fg)',
        boxShadow: 'var(--shadow)'
      };
    }

    return {
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      opacity: 0.5,
    };
  };
  
  return (
    <div className="flex flex-col items-center w-full relative">
       <button 
          onClick={onHelpClick} 
          className="absolute top-[-10px] right-[-10px] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:opacity-80 transition-opacity z-10"
          style={{
            backgroundColor: 'var(--muted)',
            color: 'var(--muted-foreground)'
          }}
          aria-label="Help & Translation"
          title="Help & Translation"
        >
          ?
      </button>
       <div className="mb-4">
        <span 
          className="text-sm font-semibold uppercase px-4 py-2 rounded-full"
          style={{ 
            color: 'var(--accent-theme)',
            backgroundColor: 'var(--muted)',
          }}
        >
          {type}
        </span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center leading-relaxed">
        {question}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(option)}
            disabled={!!selectedAnswer}
            className={`p-4 rounded-xl text-center font-semibold text-lg transition-all duration-300 ${!selectedAnswer ? 'transform active:scale-95 hover:brightness-95' : 'cursor-not-allowed'}`}
            style={getButtonStyles(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full flex justify-center">
          <button
              onClick={onNext}
              disabled={!selectedAnswer}
              className="w-full sm:w-1/2 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                  backgroundColor: 'var(--accent-theme)',
                  color: 'white',
                  boxShadow: !selectedAnswer ? 'none' : 'var(--shadow)'
              }}
          >
              Next Question
          </button>
      </div>
    </div>
  );
};