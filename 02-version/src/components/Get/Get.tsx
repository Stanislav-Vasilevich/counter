import s from './Get.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

type PropsType = {
  min: number
  max: number
	step: number
  count: number | string
	setCount: (count: number | string) => void
	progress: number
	setStep: (step: number) => void
  resetCount: (min: number) => void
  changeCount: (num: number) => void
}

const Get: React.FC<PropsType> = (
	{
		changeCount,
		resetCount,
		count,
		min,
		max,
		progress,
		step,
		setStep,
		setCount
	}) => {
  return (
    <div className={s.Get}>
      <Display type="get" count={count} min={min} max={max} setCount={setCount}/>
      <Dashboard
				changeCount={changeCount}
				resetCount={resetCount}
				count={count}
				min={min}
				max={max}
				progress={progress}
				step={step}
				setStep={setStep}
			/>
    </div>
  );
};

export default Get;
