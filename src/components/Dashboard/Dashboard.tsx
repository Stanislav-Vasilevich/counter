import s from './Dashboard.module.css';
import {CountNumberType} from '../Counter/Counter';
import {useState} from 'react';

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
  const style = {width: `${100 / max * count}%`}

  return (
    <div className={s.Dashboard}>
      <div className={s.line}>
        <span className={s.inside} style={style}></span>
      </div>

      <div className={s.buttons}>
        <button className={disabledClassMax} onClick={changeCountHandler} disabled={count === max}>inc</button>
        <button className={disabledClassMin} onClick={resetCountHandler} disabled={count === min}>reset</button>
      </div>
    </div>
  );
};

export default Dashboard;
