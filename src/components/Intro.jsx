import React, { useEffect } from 'react';

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 17000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{ height: '100vh', backgroundColor: 'black' }}>
      <video autoPlay muted style={{ width: 'auto', height: '100%', objectFit: 'cover' }}>
        <source src={`https://drive.google.com/uc?export=download&id=11MI-TnEvqKKbxufjH7gCAYIu7_YSjxCn`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
