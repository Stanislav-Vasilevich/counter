import s from './InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
  setNewValue: (value: number) => void
  count?: number | string
  setCount: (count: number | string) => void
}

const InputMin: React.FC<PropsType> = (
  {
    newMin,
    setNewValue,
    count,
    setCount,
    min,
    max,
    newMax
  }) => {
  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);

    if (num >= 0) {
      setCount('enter values and press "set"');
    }

    if (num >= newMax) {
      setCount('Incorrect value');
    }

    if (num < 0) {
      setCount('Incorrect value');
    }

    if (num === min) {
      setCount(min);
    }

    setNewValue(num);
  }

  const error = newMin < 0 || newMin >= newMax ? s.error : '';

  return <input className={`${s.input} ${error}`} onChange={changeValuesHandler} type="number" value={newMin}/>;
};

export default InputMin;
