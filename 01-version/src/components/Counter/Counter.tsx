import {useState} from 'react';
import s from './Counter.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

export type CountNumberType = 0 | 1 | 2 | 3 | 4 | 5;

const Counter = () => {
  const [count, setCount] = useState<CountNumberType>(0);
  const min = 0;
  const max = 5;

  const changeCount = (num: CountNumberType) => {
    setCount(num);
  }

  const resetCount = (min: CountNumberType) => {
    setCount(min);
  }

  return (
    <div className={s.Counter}>
      <Display count={count} max={max}/>
      <Dashboard changeCount={changeCount} resetCount={resetCount} count={count} min={min} max={max}/>
    </div>
  );
};

export default Counter;
