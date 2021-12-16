import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

export type countType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  const [count, setCount] = useState<countType>(0);

  const changeCount = () => {
    console.log('hello');
  }

  return (
    <div className="App">
      <div className="container">
        <Display count={count}/>
        <div className="buttons">
          <Button
            text={'inc'}
            changeCount={changeCount}
          />
          <Button
            text={'reset'}
            changeCount={changeCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
