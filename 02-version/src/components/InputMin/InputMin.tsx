import s from './InputMin.module.css';
import {FormEvent} from 'react';

type PropsType = {
	min: number
	setNewValue: (value: number) => void
	newMin: number
	count?: number | string
	setCount: (count: number | string) => void
}

const InputMin: React.FC<PropsType> = ({newMin, setNewValue, count, setCount, min}) => {
	const changeValuesHandler = (e: FormEvent<HTMLInputElement>) => {
		const num = Number(e.currentTarget.value);

		if (newMin !== min) {
			setCount('enter values and press "set"')
		}
		setNewValue(num);
	}

	return <input className={s.input} onChange={(e) => changeValuesHandler(e)} type="number" value={newMin}/>;
};

export default InputMin;
