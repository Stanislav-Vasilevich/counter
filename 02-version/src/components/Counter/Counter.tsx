import {useState} from 'react';
import s from './Counter.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';
import Set from '../Set/Set';
import Get from '../Get/Get';

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

  const setNewCount = () => {

  }

  return (
    <div className={s.Counter}>
      <Set min={min} max={max} setNewCount={setNewCount}/>
      <Get min={min} max={max} changeCount={changeCount} resetCount={resetCount} count={count}/>
    </div>
  );
};

export default Counter;
