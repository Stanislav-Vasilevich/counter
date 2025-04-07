import { useState} from 'react';
import s from './Counter.module.css';
import Set from '../Set/Set';
import Get from '../Get/Get';

type LocalStorageDataType = string | null;

const Counter = () => {
  const LS: LocalStorageDataType = localStorage.getItem('count');
  const dataFromLS =  LS && JSON.parse(LS);

  const [min, setMin] = useState<number>(dataFromLS.min ? dataFromLS.min : 0);
  const [max, setMax] = useState<number>(dataFromLS.max ? dataFromLS.max : 5);
  const [newMin, setNewMin] = useState<number>(dataFromLS.min ? dataFromLS.min : 0);
  const [newMax, setNewMax] = useState<number>(dataFromLS.max ? dataFromLS.max : 5);
  const [count, setCount] = useState<number | string>(dataFromLS.min ? dataFromLS.min : 0);
	const [progress, setProgress] = useState(max - min);
	const [step, setStep] = useState(0);

  const setNewMaxValue = (value: number) => {
    setNewMax(value);
  }

  const changeCount = (num: number) => {
    setCount(num);
  }

  const resetCount = (min: number) => {
    setCount(min);
  }

  const setValues = (min: number, max: number) => {
    localStorage.setItem('count', JSON.stringify({min, max}));

    setMin(min);
    setMax(max);
  }

  const setNewMinValue = (value: number) => {
    setNewMin(value);
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
           setMax={setMax}
           setMin={setMin}
           count={count}
           setCount={setCount}
      />
      <Get min={min}
					 max={max}
           newMin={newMin}
           newMax={newMax}
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
