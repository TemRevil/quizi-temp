export interface QuizQuestion {
    id: number;
    type: string;
    question: string;
    options: string[];
    correctAnswer: string;
    arabicTranslation: {
        question: string;
        options: { [key: string]: string };
        hint: string;
    };
    englishExplanation: string;
}

export interface UserAnswer {
    questionId: number;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    englishExplanation: string;
}