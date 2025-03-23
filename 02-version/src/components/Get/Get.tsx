import s from './Get.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';
import {CountNumberType} from '../Counter/Counter';

type PropsType = {
  min: number
  max: number
  count: CountNumberType
  resetCount: (min: CountNumberType) => void
  changeCount: (num: CountNumberType) => void
}

const Get: React.FC<PropsType> = ({changeCount, resetCount, count, min, max}) => {
  return (
    <div className={s.Get}>
      <Display type="get" count={count} min={min} max={max}/>
      <Dashboard changeCount={changeCount} resetCount={resetCount} count={count} min={min} max={max}/>
    </div>
  );
};

export default Get;
