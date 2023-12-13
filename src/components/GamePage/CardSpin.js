import React, { useEffect } from 'react';

const CardSpin = ({ containerRef }) => {
  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 

      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      const rotateY = ((x - halfWidth) / halfWidth) * 3; 
      const rotateX = -((y - halfHeight) / halfHeight) * 3; 

      container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [containerRef]);

  return null;
};

export default CardSpin;
