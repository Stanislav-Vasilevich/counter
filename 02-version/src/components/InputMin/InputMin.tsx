import s from './InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
	min: number
	max: number
	newMin: number
	newMax: number
	setNewValue: (value: number) => void
	count?: number | string
	setCount: (count: number | string) => void
}

const InputMin: React.FC<PropsType> = (
	{
		newMin,
		setNewValue,
		count,
		setCount,
		min,
		max,
		newMax
	}) => {
	const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
		const num = Number(e.currentTarget.value);

		console.log('num: ', num)

		// if(num < 0) {
		// 	setCount('Incorrect value');
		// }

		if (num > newMax) {
			setCount('enter values and press "set"');
		}

		// if (num === min) {
		// 	setCount(min);
		// }

		if(num >= newMax) {
			setCount('Incorrect value');
		}

		setNewValue(num);
	}

	const error = newMin < min || newMin >= newMax ? s.error : '';

	return <input className={`${s.input} ${error}`} onChange={changeValuesHandler} type="number" value={newMin}/>;
};

export default InputMin;
