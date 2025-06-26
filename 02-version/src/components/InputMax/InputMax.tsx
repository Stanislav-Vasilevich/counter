import styles from './InputMax.module.css';
import {FormEvent} from 'react';
import * as React from "react";

type PropsType = {
  min: number
  max: number
  count: number | string
  newMin: number
  newMax: number
  setNewValue: (value: number) => void
	setCount: (count: number | string) => void
}

const InputMax: React.FC<PropsType> = (
  {
    min,
    max,
    count,
    newMin,
    newMax,
    setNewValue,
    setCount
  }) => {
  const value = Number(count)

  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);

    if (num <= newMax) {
      setCount('Incorrect value');
    }

    if (num >= 0) {
      setCount('enter values and press "set"');
    }

    if (num <= newMin) {
      setCount('the max value must be greater than the start value');
    }

    if (num === max) {
      setCount(min);
    }

    setNewValue(num);
  }

  const error = newMax <= min || newMin >= newMax ? styles.error : '';
  const disabled = value > min ? styles.disabled : '';

  return (
    <input
      className={`${styles.input} ${error} ${disabled}`}
      type="number"
      value={newMax}
      onChange={(e) => changeValuesHandler(e)}
      disabled={value > min}
      maxLength={7}
    />
  )
};

export default InputMax;
