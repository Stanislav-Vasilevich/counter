import { useState} from 'react';
import s from './Counter.module.css';
import Set from '../Set/Set';
import Get from '../Get/Get';

const Counter = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(5);
  const [newMin, setNewMin] = useState<number>(min);
  const [newMax, setNewMax] = useState<number>(max);
  const [count, setCount] = useState<number | string>(min);
	const [progress, setProgress] = useState(max - min);
	const [step, setStep] = useState(0);

  const changeCount = (num: number) => {
    setCount(num);
  }

  const resetCount = (min: number) => {
    setCount(min);
  }

  const setValues = (min: number, max: number) => {
    setMin(min);
    setMax(max);
  }

  const setNewMinValue = (value: number) => {
    setNewMin(value);
  }

  const setNewMaxValue = (value: number) => {
    setNewMax(value);
  }

  return (
    <div className={s.Counter}>
      <Set min={min}
           max={max}
           newMin={newMin}
           newMax={newMax}
					 progress={progress}
					 setProgress={setProgress}
           setNewMin={setNewMin}
           setNewMax={setNewMax}
           setValues={setValues}
           setNewMinValue={setNewMinValue}
           setNewMaxValue={setNewMaxValue}
           changeCount={changeCount}
      />
      <Get min={min}
					 max={max}
					 progress={progress}
					 changeCount={changeCount}
					 resetCount={resetCount}
					 count={count}
					 setCount={setCount}
					 step={step}
					 setStep={setStep}
			/>
    </div>
  );
};

export default Counter;
