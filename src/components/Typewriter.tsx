import React, {useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span style={{marginRight: 0, paddingRight: 0}}>{currentText}</span>;
};

export default Typewriter;
