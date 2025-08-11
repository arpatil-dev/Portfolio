import React, { useEffect, useState } from 'react';
import '../assets/styles/CustomCursor.scss';

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add cursor position listener
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .cursor-pointer'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor - Glowing Dot */}
      <div
        className={`custom-cursor-main ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      
      {/* Cursor Trail */}
      <div
        className={`custom-cursor-trail ${isHovering ? 'hovering' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      {/* Cursor Outer Ring */}
      <div
        className={`custom-cursor-outer ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
    </>
  );
};

export default CustomCursor;
