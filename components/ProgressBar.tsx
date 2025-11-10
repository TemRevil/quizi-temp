import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-semibold" style={{ color: 'var(--muted-foreground)' }}>
          السؤال {current} من {total}
        </p>
      </div>
      <div className="w-full rounded-full h-3" style={{ backgroundColor: 'var(--muted)'}}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: 'var(--accent-theme)' }}
        ></div>
      </div>
    </div>
  );
};