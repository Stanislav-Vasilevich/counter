import s from './Display.module.css';
import {CountNumberType} from '../Counter/Counter';
import Input from '../Input/Input';

type PropsType = {
  type: 'set' | 'get'
  count?: CountNumberType
  min: number
  max: number
}

const Display: React.FC<PropsType> = ({type, count, min, max}) => {
  const disabledClass = count === max ? `${s.number} ${s.max}` : s.number;

  return (
    <div className={s.Display}>
      {
        type === 'set'
          ? (
            <div className={s.form}>
              <label className={s.label}>max value: <Input type="min" min={min} max={max}/></label>
              <label className={s.label}>start value: <Input type="max" min={min} max={max}/></label>
            </div>
          )
          : <span className={disabledClass}>{count}</span>
      }

    </div>
  );
};

export default Display;
