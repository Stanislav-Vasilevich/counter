import s from '../InputMin/InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
  setNewValue: (value: number) => void
  min: number
  newMin: number
  newMax: number
	count?: number | string
	setCount: (count: number | string) => void
}

const InputMax: React.FC<PropsType> = (
  {
    newMax,
    setNewValue,
    min,
    newMin,
    count,
    setCount
  }) => {
  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);

    if (num <= newMax) {
      setCount('Incorrect value');
    }

    setNewValue(num);
  }

  const error = newMax <= min || newMin >= newMax ? s.error : '';

  return <input className={`${s.input} ${error}`} onChange={(e) => changeValuesHandler(e)} type="number" value={newMax}/>;
};

export default InputMax;
