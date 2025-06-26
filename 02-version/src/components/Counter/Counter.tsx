import {useEffect, useState} from 'react';
import styles from './Counter.module.css';
import Set from '../Set/Set';
import Get from '../Get/Get';

type LocalStorageDataType = string | null;
export type Settings = 'get' | 'set'

const Counter = () => {
  const [settings, setSettings] = useState<Settings>('get');
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(5);
  const [newMin, setNewMin] = useState<number>(0);
  const [newMax, setNewMax] = useState<number>(5);
  const [count, setCount] = useState<number | string>(0);
  const [progress, setProgress] = useState(max - min);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const LS: LocalStorageDataType = localStorage.getItem('count');
    const dataFromLS = LS && JSON.parse(LS);
    const localStorageMinValue = dataFromLS.min && Number(dataFromLS.min)
    const localStorageMaxValue = dataFromLS.max && Number(dataFromLS.max)

    setMin(localStorageMinValue)
    setCount(localStorageMinValue)
    setNewMin(localStorageMinValue)
    setMax(localStorageMaxValue)
    setNewMax(localStorageMaxValue)
    setProgress(localStorageMaxValue - localStorageMinValue);
  }, []);

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

  const changeSettings = (settings: Settings) => {
    setSettings(settings)
  }

  return (
    <div className={styles.counter}>
      {
        settings === 'set'
          ? <Set min={min}
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
                 settings={settings}
                 changeSettings={changeSettings}
          />
          : <Get min={min}
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
                 setMax={setMax}
                 setMin={setMin}
                 settings={settings}
                 changeSettings={changeSettings}
                 setProgress={setProgress}
          />
      }
    </div>
  );
};

export default Counter;
