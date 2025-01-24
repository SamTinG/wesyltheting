import React, { useState, useEffect, useRef } from 'react';


function Audio({muted}) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
          // Attempt to play audio only after the component mounts and is muted initially
          if (!muted) {
            audioRef.current.play();
          }
        }
      }, [muted]); // Trigger this when muted state changes

  return (
    <div>
      <audio ref={audioRef} autoPlay loop muted={muted}>
        <source src={`${process.env.PUBLIC_URL}/intro.mp3`} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Audio;