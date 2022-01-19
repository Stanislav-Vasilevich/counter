import React, {useState} from 'react';
import './App.css';
import Box from './components/Box/Box';

export type boxType = 'counter' | 'setCounter';

function App() {
  let [startCount, setStartCount] = useState<number>(0);
  let [display, setDisplay] = useState<number>(0);
  let [maxCount, setMaxCount] = useState<number>(5);

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
