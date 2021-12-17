import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

function App() {
  let [count, setCount] = useState<number>(0);

  const addCount = () => {
    if(count >= 0 && count < 5) {
      setCount(++count);
    }
  }

  const resetCount = () => {
    if(count !== 0) {
      setInterval(() => {
        if(count === 0) {
          return;
        } else {
          setCount(--count);
        }
      }, 50);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Display count={count}/>
        <div className="buttons">
          <Button
            text={'inc'}
            count={count}
            changeCount={addCount}
          />
          <Button
            text={'reset'}
            count={count}
            changeCount={resetCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
