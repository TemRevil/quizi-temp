// A simple sound utility to play sounds without any external files.

let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
    if (typeof window !== 'undefined' && !audioContext) {
        try {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API is not supported in this browser");
            return null;
        }
    }
    return audioContext;
};

const playSound = () => {
    try {
        const context = getAudioContext();
        if (!context) return;

        // Create oscillator and gain node for a subtle click
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();

        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        // Sound parameters for a short, subtle, formal click
        const clickTime = 0.05; // 50ms duration
        const volume = 0.1; // Low volume
        
        gainNode.gain.setValueAtTime(0, context.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, context.currentTime + 0.005);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + clickTime);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, context.currentTime);

        // Start and stop the sound
        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + clickTime);

    } catch (error) {
        console.error("Could not play sound:", error);
    }
};

export const playInteractionSound = () => playSound();
