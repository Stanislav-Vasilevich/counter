import styles from './Get.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';
import * as React from "react";
import {Settings} from "../Counter/Counter.tsx";

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
  step: number
  count: number | string
  setCount: (count: number | string) => void
  progress: number
  setStep: (step: number) => void
  resetCount: (min: number) => void
  changeCount: (num: number) => void
  setMin: (min: number) => void
  setMax: (max: number) => void
  settings: Settings
  changeSettings: (settings: Settings) => void
  setProgress: (progress: number) => void
}

const Get: React.FC<PropsType> = (
  {
    changeCount,
    resetCount,
    count,
    min,
    max,
    progress,
    step,
    setStep,
    setCount,
    newMin,
    newMax,
    setMin,
    setMax,
    settings,
    changeSettings,
    setProgress,
  }) => {
  return (
    <div className={styles.get}>
      <Display
        type="get"
        count={count}
        min={min}
        max={max}
        setMin={setMin}
        setMax={setMax}
        setCount={setCount}
        newMin={newMin}
        newMax={newMax}
      />
      <Dashboard
        changeCount={changeCount}
        resetCount={resetCount}
        count={count}
        setCount={setCount}
        min={min}
        max={max}
        newMin={newMin}
        newMax={newMax}
        progress={progress}
        step={step}
        setStep={setStep}
        settings={settings}
        changeSettings={changeSettings}
        setProgress={setProgress}
      />
    </div>
  );
};

export default Get;
