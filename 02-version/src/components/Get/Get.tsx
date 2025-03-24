import s from './Get.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

type PropsType = {
  min: number
  max: number
  count: number
  resetCount: (min: number) => void
  changeCount: (num: number) => void
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
