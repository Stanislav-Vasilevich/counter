import s from './Dashboard.module.css';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import {useState} from "react";

export type StyleType = {
	width: string
}

type PropsType = {
	min: number
	max: number
	step: number
	count: number | string
	progress: number
	setStep: (step: number) => void
	resetCount: (min: number) => void
	changeCount: (num: number) => void
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
		progress
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

	const disabledClassMax = count === max ? `${s.button} ${s.disabled}` : s.button;
	const disabledClassMin = count === min ? `${s.button} ${s.disabled}` : s.button;
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

	return (
		<div className="dashboard">
			<ProgressBar style={{width: `${step * widthLine}%`}}/>

			<div className={s.buttons}>
				<Button className={disabledClassMax} title="inc" onClick={changeCountHandler} disabled={count === max}/>
				<Button className={disabledClassMin} title="reset" onClick={resetCountHandler} disabled={count === min}/>
			</div>
		</div>
	);
};

export default Dashboard;
