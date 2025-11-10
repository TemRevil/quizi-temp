import React, { useState, useCallback, useEffect } from 'react';
import { QuizCard } from './components/QuizCard.tsx';
import { ProgressBar } from './components/ProgressBar.tsx';
import { FinalResultCard } from './components/FinalResultCard.tsx';
import { ExplanationWidget } from './components/ExplanationWidget.tsx';
import { BatchResultCard } from './components/BatchResultCard.tsx';
import { quizData } from './data/quizData.ts';
import { QuizQuestion, UserAnswer } from './types.ts';
import { playInteractionSound } from './utils/sound.ts';

const BATCH_SIZE = 10;

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const App: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [quizFinished, setQuizFinished] = useState(false);
    const [explanation, setExplanation] = useState<QuizQuestion['arabicTranslation'] | null>(null);
    const [isExplanationOpen, setIsExplanationOpen] = useState(false);
    const [currentSelection, setCurrentSelection] = useState<string | null>(null);
    const [showBatchResult, setShowBatchResult] = useState(false);
    
    useEffect(() => {
        setQuestions(shuffleArray(quizData));
    }, []);

    const handleSelectAnswer = useCallback((answer: string) => {
        if (currentSelection || questions.length === 0) return;

        playInteractionSound();
        setCurrentSelection(answer);
        
        const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
        const newAnswer: UserAnswer = {
            questionId: questions[currentQuestionIndex].id,
            question: questions[currentQuestionIndex].question,
            userAnswer: answer,
            correctAnswer: questions[currentQuestionIndex].correctAnswer,
            isCorrect: isCorrect,
            englishExplanation: questions[currentQuestionIndex].englishExplanation
        };
        
        setUserAnswers(prev => [...prev, newAnswer]);

    }, [currentSelection, currentQuestionIndex, questions]);

    const handleNextQuestion = useCallback(() => {
        playInteractionSound();
        
        const isLastQuestionInBatch = (currentQuestionIndex + 1) % BATCH_SIZE === 0;
        const isLastQuestionOverall = currentQuestionIndex === questions.length - 1;

        if (isLastQuestionInBatch && !isLastQuestionOverall) {
            setShowBatchResult(true);
        } else if (isLastQuestionOverall) {
            setQuizFinished(true);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setCurrentSelection(null); 
        }
    }, [currentQuestionIndex, questions.length]);

    const handleContinueAfterBatch = () => {
        setShowBatchResult(false);
        setCurrentQuestionIndex(prev => prev + 1);
        setCurrentSelection(null);
    };

    const handleRestartQuiz = useCallback(() => {
        setQuestions(shuffleArray(quizData));
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setQuizFinished(false);
        setCurrentSelection(null);
        setShowBatchResult(false);
    }, []);
    
    const handleShowExplanation = (exp: QuizQuestion['arabicTranslation']) => {
      setExplanation(exp);
      setIsExplanationOpen(true);
    };

    if (questions.length === 0) {
        return null; // Or a loading spinner
    }

    const renderContent = () => {
        if (quizFinished) {
            return (
              <FinalResultCard 
                total={questions.length} 
                onRestart={handleRestartQuiz}
                userAnswers={userAnswers}
              />
            );
        }

        if (showBatchResult) {
            const batchStartIndex = Math.floor(currentQuestionIndex / BATCH_SIZE) * BATCH_SIZE;
            const batchAnswers = userAnswers.slice(batchStartIndex, batchStartIndex + BATCH_SIZE);
            const batchScore = batchAnswers.filter(a => a.isCorrect).length;
            return (
                <BatchResultCard 
                    score={batchScore}
                    total={BATCH_SIZE}
                    onContinue={handleContinueAfterBatch}
                />
            );
        }

        const currentQuestion = questions[currentQuestionIndex];
        return (
            <QuizCard
                type={currentQuestion.type}
                question={currentQuestion.question}
                options={currentQuestion.options}
                onSelectAnswer={handleSelectAnswer}
                onHelpClick={() => handleShowExplanation(currentQuestion.arabicTranslation)}
                selectedAnswer={currentSelection}
                correctAnswer={currentQuestion.correctAnswer}
                onNext={handleNextQuestion}
            />
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: 'var(--foreground)' }}>
                  Management Principles Quiz
                </h1>
                <p className="text-center mb-8" style={{ color: 'var(--muted-foreground)' }}>
                  Test your knowledge in organization and management.
                </p>
                
                {!(quizFinished || showBatchResult) && (
                   <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
                )}

                <div 
                  className="rounded-3xl p-6 sm:p-8 transition-all duration-300 min-h-[300px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundColor: 'var(--card)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                    {renderContent()}
                </div>
            </div>
            {explanation && <ExplanationWidget 
              isOpen={isExplanationOpen}
              onClose={() => setIsExplanationOpen(false)}
              translation={explanation}
            />}
        </div>
    );
};