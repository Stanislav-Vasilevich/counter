import styles from './InputMin.module.css';
import {FormEvent} from 'react';
import * as React from "react";

type PropsType = {
  min: number
  count: number | string
  newMin: number
  newMax: number
  setNewValue: (value: number) => void
  setCount: (count: number | string) => void
}

const InputMin: React.FC<PropsType> = (
  {
    min,
    count,
    newMin,
    newMax,
    setNewValue,
    setCount,
  }) => {
  const value = Number(count)

  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);

    if (num >= 0) {
      setCount('enter values and press "set"');
    }

    if (num < 0) {
      setCount('Incorrect value');
    }

    if (num >= newMax) {
      setCount('the max value must be greater than the start value');
    }

    if (num === min) {
      setCount(min);
    }

    setNewValue(num);
  }

  const error = newMin < 0 || newMin >= newMax ? styles.error : '';
  const disabled = value > min ? styles.disabled : '';

  return (
    <input
      className={`${styles.input} ${error} ${disabled}`}
      onChange={changeValuesHandler}
      type="number"
      value={newMin}
      disabled={value > min}
      maxLength={7}
    />
  )
};

export default InputMin;
