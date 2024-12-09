import { useState } from 'react';


export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                Toggle Theme
            </button>
        </div>
    );
}


import { useState, useEffect } from 'react';


export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    return <p>Time Left: {timeLeft}</p>;
}
