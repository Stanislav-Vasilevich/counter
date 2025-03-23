import s from './Dashboard.module.css';
import {CountNumberType} from '../Counter/Counter';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';

export type StyleType = {
  width: string
}

type PropsType = {
  changeCount: (num: CountNumberType) => void
  resetCount: (min: CountNumberType) => void
  count: CountNumberType
  min: CountNumberType
  max: CountNumberType
}

const Dashboard: React.FC<PropsType> = ({changeCount, resetCount, count, min, max}) => {
  const changeCountHandler = () => {
    count++;

    if(count <= max) {
      changeCount(count);
    }
  }

  const resetCountHandler = () => {
    setInterval(() => {
      if(count > min) {
        count--;
        resetCount(count);
      }
    }, 50);
  }

  const disabledClassMax = count === max ? `${s.button} ${s.disabled}` : s.button;
  const disabledClassMin = count === min ? `${s.button} ${s.disabled}` : s.button;
  const style: StyleType = {width: `${100 / max * count}%`}

  return (
    <div className={s.Dashboard}>
      <ProgressBar style={style}/>

      <div className={s.buttons}>
        <Button className={disabledClassMax} title="inc" onClick={changeCountHandler} disabled={count === max}/>
        <Button className={disabledClassMin} title="reset" onClick={resetCountHandler} disabled={count === min}/>
      </div>
    </div>
  );
};

export default Dashboard;
