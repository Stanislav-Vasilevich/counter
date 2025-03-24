import s from '../InputMin/InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
  setNewValue: (value: number) => void
  newMax: number
}

const InputMax: React.FC<PropsType> = ({newMax, setNewValue}) => {
  const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
    setNewValue(Number(e.currentTarget.value));
  }

  return <input className={s.input} onChange={(e) => changeValuesHandler(e)} type="number" value={newMax}/>;
};

export default InputMax;
