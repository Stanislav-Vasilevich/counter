import s from './Display.module.css';
import {CountNumberType} from '../Counter/Counter';

type PropsType = {
  count: CountNumberType
  max: number
}

const Display: React.FC<PropsType> = ({count, max}) => {
  const disabledClass = count === max ? `${s.number} ${s.max}` : s.number;

  return (
    <div className={s.Display}>
      <span className={disabledClass}>{count}</span>
    </div>
  );
};

export default Display;
