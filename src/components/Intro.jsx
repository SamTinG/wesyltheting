import React, { useEffect } from 'react';

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 17000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{ height: '100vh', backgroundColor: 'black' }}>
      <video autoPlay muted style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
        <source src={"https://pub-25a5a273b5674737acbe05ca2463d8b3.r2.dev/Intro_1080.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
