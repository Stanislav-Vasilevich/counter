import s from './InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
  setNewValue: (value: number) => void
  newMin: number
}

const InputMin: React.FC<PropsType> = ({newMin, setNewValue}) => {
  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    setNewValue(Number(e.currentTarget.value));
  }

  return <input className={s.input} onChange={(e) => changeValuesHandler(e)} type="number" value={newMin}/>;
};

export default InputMin;
