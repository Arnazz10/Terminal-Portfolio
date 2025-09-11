import { useEffect, useRef } from "react";

export function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const activeChars = new Set<HTMLDivElement>();

    function createMatrixChar() {
      if (!container) return;
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 10 + 10) + 's';
      char.style.animationDelay = Math.random() * 20 + 's';
      container.appendChild(char);
      activeChars.add(char);
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
          activeChars.delete(char);
        }
      }, 30000);
    }

    for (let i = 0; i < 50; i++) {
      setTimeout(createMatrixChar, Math.random() * 5000);
    }
    const interval = setInterval(createMatrixChar, 200);
    return () => {
      clearInterval(interval);
      activeChars.forEach(char => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      });
      activeChars.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      data-testid="matrix-rain"
    />
  );
}


