import s from './Dashboard.module.css';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';

export type StyleType = {
  width: string
}

type PropsType = {
  min: number
  max: number
  count: number
  resetCount: (min: number) => void
  changeCount: (num: number) => void
}

const Dashboard: React.FC<PropsType> = ({
    changeCount,
    resetCount,
    count,
    min,
    max
  }) => {
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
  const style: StyleType = {width: `${100 / (max - min) * count}%`};
  console.log('style: ', style);

  return (
    <div className="dashboard">
      <ProgressBar style={min ? {width: '0'} : style}/>

      <div className={s.buttons}>
        <Button className={disabledClassMax} title="inc" onClick={changeCountHandler} disabled={count === max}/>
        <Button className={disabledClassMin} title="reset" onClick={resetCountHandler} disabled={count === min}/>
      </div>
    </div>
  );
};

export default Dashboard;
