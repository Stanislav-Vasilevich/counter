import styles from './Set.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';
import * as React from "react";
import {Settings} from "../Counter/Counter.tsx";

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
  setNewMin: (min: number) => void
  setNewMax: (max: number) => void
  progress: number
  setProgress: (newProgress: number) => void
  setMin: (min: number) => void
  setMax: (max: number) => void
  setValues: (newMin: number, newMax: number) => void
  setNewMinValue: (value: number) => void
  setNewMaxValue: (value: number) => void
  changeCount: (newMin: number) => void
  count: number | string
  setCount: (value: number | string) => void
  settings: Settings
  changeSettings: (settings: Settings) => void
}

const Set: React.FC<PropsType> = (
  {
    min,
    max,
    newMin,
    newMax,
    setProgress,
    setValues,
    setNewMinValue,
    setNewMaxValue,
    changeCount,
    count,
    setCount,
    settings,
    changeSettings,
  }) => {
  const setMinHandler = (min: number) => {
    setNewMinValue(min);
  }

  const setMaxHandler = (max: number) => {
    setNewMaxValue(max);
  }

  const setNewValues = () => {
    const newProgress = newMax - newMin;
    setProgress(newProgress);
    setValues(newMin, newMax);
    changeCount(newMin)
    changeSettings('get')
    // setProgress(0)

    console.log('data2: ', settings)
  }

  return (
    <div className={styles.set}>
      <Display type="set"
               min={min}
               max={max}
               newMin={newMin}
               newMax={newMax}
               setMin={setMinHandler}
               setMax={setMaxHandler}
               count={count}
               setCount={setCount}
      />

      <div className={styles.dashboard}>
        <Button title="set"
                onClick={setNewValues}
                disabled={
                  newMin === min && newMax === max
                  || newMin >= newMax
                  || newMin < 0
                  || newMin >= newMax
                }
        />
      </div>
    </div>
  );
};

export default Set;
