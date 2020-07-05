import React from 'react';
import './App.css';

import {send} from '../client-ipc';

const App = () => {

  function checkIPC(){
    send('test');
  }

    return (
      <div className="App">
        <button onClick={checkIPC}>

        </button>
      </div>
    );
}

export default App;
