import styles from './Dashboard.module.css';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as React from "react";
import {Settings} from "../Counter/Counter.tsx";

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
  step: number
  count: number | string
  setCount: (count: number) => void
  progress: number
  setStep: (step: number) => void
  resetCount: (min: number) => void
  changeCount: (num: number) => void
  settings: Settings
  changeSettings: (settings: Settings) => void
  setProgress: (progress: number) => void
}

const Dashboard: React.FC<PropsType> = (
  {
    changeCount,
    resetCount,
    count,
    setCount,
    min,
    max,
    step,
    setStep,
    progress,
    newMin,
    newMax,
    settings,
    changeSettings,
    setProgress,
  }) => {
  let value = Number(count);

  const resetCountHandler = () => {
    setStep(0);

    setInterval(() => {
      if (value > min) {
        value--
        resetCount(value)
      }
    }, 50);
  }

  const disabledInc = count === max || newMin > min || newMax > max || newMin < min || newMax <= min ? styles.disabled : '';
  const disabledReset = count === min || newMin > min || newMax > max || newMin < min ? styles.disabled : '';
  const widthLineStep = 100 / progress;

  const changeCountHandler = () => {
    value++;

    if (value <= max) {
      changeCount(value);
    }

    if (step < max) {
      setStep(++step);
    }
  }

  const changeSettingsHandler = () => {
    setCount(min)
    changeSettings('set')
    // setProgress(0)

    console.log('data: ', settings)
  }


  const lengthLineProgressBar = settings === 'set' ? '0' : step * widthLineStep

  return (
    <div className={styles.dashboard}>
      <ProgressBar length={lengthLineProgressBar}/>

      <div className={styles.buttons}>
        <Button
          className={`${styles.button} ${disabledInc}`}
          title="inc"
          onClick={changeCountHandler}
          disabled={count === max}
        />
        <Button
          className={`${styles.button} ${disabledReset}`}
          title="reset"
          onClick={resetCountHandler}
          disabled={value === min}
        />
        <Button
          className={`${styles.button}`}
          title="set"
          onClick={changeSettingsHandler}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;