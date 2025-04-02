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
    newMin
  }) => {
  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    setNewValue(Number(e.currentTarget.value));
  }

  const error = newMax <= min || newMin >= newMax ? s.error : '';

  return <input className={`${s.input} ${error}`} onChange={(e) => changeValuesHandler(e)} type="number" value={newMax}/>;
};

export default InputMax;
