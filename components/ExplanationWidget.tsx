import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface ExplanationWidgetProps {
    isOpen: boolean;
    onClose: () => void;
    translation: QuizQuestion['arabicTranslation'];
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const ExplanationWidget: React.FC<ExplanationWidgetProps> = ({ isOpen, onClose, translation }) => {
    const [shouldRender, setShouldRender] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        }
    }, [isOpen]);

    const onAnimationEnd = () => {
        if (!isOpen) {
            setShouldRender(false);
        }
    };

    if (!shouldRender) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={onClose} 
            onTransitionEnd={onAnimationEnd}
            role="dialog" 
            aria-modal="true"
            dir="rtl"
        >
            <div 
                className={`rounded-3xl p-6 w-full max-w-lg relative text-right transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: 'var(--card)',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full" 
                    aria-label="إغلاق"
                    style={{
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)'
                    }}
                >
                    <CloseIcon />
                </button>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent-theme)' }}>ترجمة وتلميح</h3>
                <div 
                    className="max-w-none max-h-[60vh] overflow-y-auto text-base leading-relaxed pr-2 space-y-4" 
                    style={{ color: 'var(--foreground)'}}
                >
                    <div>
                        <p className="font-bold">السؤال المترجم:</p>
                        <p>{translation.question}</p>
                    </div>
                    <div>
                        <p className="font-bold">الخيارات المترجمة:</p>
                        <ul className="list-disc pr-5 mt-2 space-y-2">
                            {Object.values(translation.options).map((translatedOption, index) => (
                                <li key={index}>
                                    {translatedOption}
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <p className="font-bold">تلميح:</p>
                        <p>{translation.hint}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};