import React, {useState} from 'react';
import styles from './App.module.css';
import Box from './components/Box/Box';

export type boxType = 'counter' | 'setCounter';
export type displayType = 'enter values and press "set"'
  | 'Incorrect value!'
  | number;

function App() {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [localStorageStartValue, setLocalStorageStartValue] = useState(0);
  const [localStorageMaxValue, setLocalStorageMaxValue] = useState(0);
  const [display, setDisplay] = useState(0);
  const [showDisplay, setShowDisplay] = useState<displayType>(0);

  const showNewDisplay = (num: number) => {
    if(startValue < 0) {
      setShowDisplay('Incorrect value!');
    } else if (
      startValue === maxValue
      || startValue > maxValue
    ) {
      setShowDisplay('Incorrect value!');
    }
    else if (
      startValue !== localStorageStartValue
      || maxValue !== localStorageMaxValue
    ) {
      setShowDisplay('enter values and press "set"');
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Box
              type={'setCounter'}
              startValue={startValue}
              maxValue={maxValue}
              setStartValue={setStartValue}
              setMaxValue={setMaxValue}
              display={display}
              setDisplay={setDisplay}
              showDisplay={showDisplay}
              setShowDisplay={setShowDisplay}
              localStorageStartValue={localStorageStartValue}
              setLocalStorageStartValue={setLocalStorageStartValue}
              localStorageMaxValue={localStorageMaxValue}
              setLocalStorageMaxValue={setLocalStorageMaxValue}
              showNewDisplay={showNewDisplay}
            />
            <Box
              type={'counter'}
              startValue={startValue}
              maxValue={maxValue}
              setStartValue={setStartValue}
              setMaxValue={setMaxValue}
              display={display}
              setDisplay={setDisplay}
              showDisplay={showDisplay}
              setShowDisplay={setShowDisplay}
              localStorageStartValue={localStorageStartValue}
              setLocalStorageStartValue={setLocalStorageStartValue}
              localStorageMaxValue={localStorageMaxValue}
              setLocalStorageMaxValue={setLocalStorageMaxValue}
              showNewDisplay={showNewDisplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
