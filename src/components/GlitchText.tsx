import React from 'react';
import '../styles/animations.css';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className, style }) => {
  return (
    <span 
      className={`glitch ${className}`} 
      data-text={text}
      style={style}
    >
      {text}
    </span>
  );
};

export default GlitchText;
