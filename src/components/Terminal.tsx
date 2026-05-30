import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  lines: string[];
}

const Terminal: React.FC<TerminalProps> = ({ lines }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      let charIndex = 0;

      const timer = setInterval(() => {
        if (charIndex < line.length) {
          setCurrentText((prev) => prev + line[charIndex]);
          charIndex++;
        } else {
          clearInterval(timer);
          setDisplayedLines((prev) => [...prev, line]);
          setCurrentText("");
          setCurrentLineIndex((prev) => prev + 1);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [currentLineIndex, lines]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedLines, currentText]);

  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      height: '400px',
      backgroundColor: 'var(--terminal-bg)',
      border: '1px solid var(--secondary-color)',
      borderRadius: '8px',
      padding: '20px',
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      overflowY: 'auto',
      boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)',
      position: 'relative',
    }}>
      <div style={{
        position: 'sticky',
        top: '-20px',
        left: '-20px',
        right: '-20px',
        backgroundColor: '#1a1a1a',
        padding: '5px 15px',
        display: 'flex',
        gap: '8px',
        borderBottom: '1px solid #333',
        marginBottom: '15px',
        zIndex: 10,
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
        <span style={{ color: '#666', fontSize: '12px', marginLeft: 'auto' }}>bash — elliott@portfolio</span>
      </div>
      
      {displayedLines.map((line, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          <span style={{ color: 'var(--primary-color)' }}>$ </span>
          {line}
        </div>
      ))}
      
      {currentLineIndex < lines.length && (
        <div style={{ marginBottom: '8px' }}>
          <span style={{ color: 'var(--primary-color)' }}>$ </span>
          {currentText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ borderLeft: '8px solid var(--primary-color)', marginLeft: '2px' }}
          />
        </div>
      )}
      
      <div ref={terminalEndRef} />
    </div>
  );
};

export default Terminal;
