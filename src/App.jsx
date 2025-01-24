import React, { useState } from 'react';
import Intro from './components/Intro';
import Form from './components/Form';
import Audio from './components/Audio';

const App = () => {
  const [muted, setMuted] = useState(true);

  const allowAudio = () => {
    setMuted(false);
  };

  const [showForm, setShowForm] = useState(true);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return <div>
    {muted && (
        <div>
          <button onClick={allowAudio}>Play</button>
        </div>
      )}
  {muted ? <></> : showForm ? <Form uuid={urlParams.get('id')} /> : <Intro onFinish={() => setShowForm(true)} />}
  <Audio muted={muted}/>
  </div>;
};

export default App;
