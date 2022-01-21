import React, {useState} from 'react';
import './App.css';
import Box from './components/Box/Box';

export type boxType = 'counter' | 'setCounter';

function App() {
  const [startCount, setStartCount] = useState(0);
  const [maxCount, setMaxCount] = useState(5);
  const [display, setDisplay] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Box
              type={'setCounter'}
              startCount={startCount}
              maxCount={maxCount}
              display={display}
              setStartCount={setStartCount}
              setMaxCount={setMaxCount}
              setDisplay={setDisplay}
            />
            <Box
              type={'counter'}
              startCount={startCount}
              maxCount={maxCount}
              display={display}
              setStartCount={setStartCount}
              setMaxCount={setMaxCount}
              setDisplay={setDisplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
