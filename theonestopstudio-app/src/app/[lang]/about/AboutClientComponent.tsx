'use client';

import { useEffect, useState } from 'react';

interface AboutClientComponentProps {
  words: string[];
}

export default function AboutClientComponent({ words }: AboutClientComponentProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="blizzard-wrapper">
      <span 
        className="blizzard"
        key={currentWordIndex}
        style={{
          animation: 'roll-in 0.5s ease-out forwards'
        }}
      >
        {words[currentWordIndex]}
      </span>
    </span>
  );
}
