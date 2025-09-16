import { useEffect, useRef } from "react";

export function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01アイウエオカキクサシスセソタトナニヌネノハヒフヘホムメモヤユヨラレロワヲン';
    const activeChars = new Set<HTMLDivElement>();
    const MAX_ACTIVE = 140; // even lighter density
    const INITIAL_SPAWN = 60; // reduced initial glyphs
    const SPAWN_INTERVAL_MS = 180; // slower spawn rate

    function createMatrixChar() {
      if (!container) return;
      if (activeChars.size >= MAX_ACTIVE) return;
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      // Spread across the entire viewport width
      char.style.left = (Math.random() * 100) + '%';
      // Faster and visible immediately (use negative delays so some start mid-fall)
      char.style.animationDuration = (Math.random() * 5 + 7) + 's';
      char.style.animationDelay = ((Math.random() < 0.7 ? -Math.random() * 6 : Math.random() * 2)).toFixed(2) + 's';
      container.appendChild(char);
      activeChars.add(char);
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
          activeChars.delete(char);
        }
      }, 18000);
    }

    for (let i = 0; i < INITIAL_SPAWN; i++) {
      // Create immediately so rain is visible on first paint
      createMatrixChar();
    }
    const interval = setInterval(createMatrixChar, SPAWN_INTERVAL_MS);
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


