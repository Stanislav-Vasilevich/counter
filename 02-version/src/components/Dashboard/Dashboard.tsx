import s from './Dashboard.module.css';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';

export type StyleType = {
	width: string
}

type PropsType = {
	min: number
	max: number
	newMin: number
	newMax: number
	step: number
	count: number | string
	progress: number
	setStep: (step: number) => void
	resetCount: (min: number | string) => void
	changeCount: (num: number | string) => void
}

const Dashboard: React.FC<PropsType> = (
	{
		changeCount,
		resetCount,
		count,
		min,
		max,
		step,
		setStep,
		progress,
		newMin,
		newMax
	}) => {
	const resetCountHandler = () => {
		setStep(0);

		setInterval(() => {
			if (count > min) {
				count--;
				resetCount(count);
			}
		}, 50);
	}

	const disabledInc = count === max || newMin > min || newMax > max || newMin < min || newMax <= min ? s.disabled : '';
	const disabledReset = count === min || newMin > min || newMax > max || newMin < min ? s.disabled : '';
	const widthLine = 100 / progress;

	const changeCountHandler = () => {
		count++;

		if (count <= max) {
			changeCount(count);
		}

		if(step < max) {
			setStep(++step);
		}
	}

	// console.log('newMin: ', newMin)
	// console.log('newMax: ', newMax)
	// console.log('min: ', min)
	// console.log('max: ', max)
	// console.log('count: ', count)

	return (
		<div className="dashboard">
			<ProgressBar style={{width: `${step * widthLine}%`}}/>

			<div className={s.buttons}>
				<Button className={`${s.button} ${disabledInc}`}
								title="inc"
								onClick={changeCountHandler}
								disabled={count === max}/> {/* || newMin >= max || newMin < min */}
				<Button className={`${s.button} ${disabledReset}`}
								title="reset"
								onClick={resetCountHandler}
								disabled={count === min}/>
			</div>
		</div>
	);
};

export default Dashboard;
