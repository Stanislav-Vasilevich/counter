import s from './Display.module.css';
import InputMin from '../InputMin/InputMin';
import InputMax from '../InputMax/InputMax';

type PropsType = {
  type: 'set' | 'get'
  min: number
  max: number
  newMin: number
  newMax: number
  count?: number
  setMin?: (min: number) => void
  setMax?: (max: number) => void
}

const Display: React.FC<PropsType> = ({type, count, min, max, newMin, newMax, setMin, setMax}) => {
  const disabledClass = count === max ? `${s.number} ${s.max}` : s.number;

  const setMinHandler = (min: number) => {
    setMin && setMin(min);
  }

  const setMaxHandler = (max: number) => {
    setMax && setMax(max);
  }

  return (
    <div className={s.Display}>
      {
        type === 'set'
          ? (
            <div className={s.form}>
              <label className={s.label}>start value: <InputMin newMin={newMin} setNewValue={setMinHandler}/></label>
              <label className={s.label}>max value: <InputMax newMax={newMax} setNewValue={setMaxHandler}/></label>
            </div>
          )
          : <span className={disabledClass}>{count}</span>
      }

    </div>
  );
};

export default Display;
