import React from 'react';
import './App.css';
import Box from './components/Box/Box';

export type boxType = 'counter' | 'setCounter';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Box type={'setCounter'}/>
            <Box type={'counter'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
