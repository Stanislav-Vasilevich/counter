import s from './Get.module.css';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

type PropsType = {
  min: number
  max: number
	newMin: number
	newMax: number
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
		setCount,
		newMin,
		newMax
	}) => {
  return (
    <div className={s.Get}>
      <Display type="get" count={count} min={min} max={max} setCount={setCount} newMin={newMin}/>
      <Dashboard
				changeCount={changeCount}
				resetCount={resetCount}
				count={count}
				min={min}
				max={max}
				newMin={newMin}
				newMax={newMax}
				progress={progress}
				step={step}
				setStep={setStep}
			/>
    </div>
  );
};

export default Get;
