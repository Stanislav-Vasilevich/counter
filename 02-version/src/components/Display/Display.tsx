import s from './Display.module.css';
import InputMin from '../InputMin/InputMin';
import InputMax from '../InputMax/InputMax';

type PropsType = {
	type: 'set' | 'get'
	min: number
	max: number
	newMin: number
	newMax: number
	setMin?: (min: number) => void
	setMax?: (max: number) => void
	count: number | string
	setCount: (count: number | string) => void
}

const Display: React.FC<PropsType> = (
	{
		type,
		count,
		min,
		max,
		newMin,
		newMax,
		setMin,
		setMax,
		setCount
	}) => {
	console.log('count: ', count);
	const disabledClass = count === max ? `${s.number} ${s.max}` : s.number;

	const setMinHandler = (min: number) => {
		setMin && setMin(min);
	}

	const setMaxHandler = (max: number) => {
		setMax && setMax(max);
	}

	return (
		<div className={s.Display}>
			{
				type === 'set'
					? (
						<div className={s.form}>
							<label className={s.label}>
								start value:
								<InputMin
									min={min}
									newMin={newMin}
									setNewValue={setMinHandler}
									count={count}
									setCount={setCount}
								/>
							</label>
							<label className={s.label}>
								max value:
								<InputMax
									newMax={newMax}
									setNewValue={setMaxHandler}
									count={count}
									setCount={setCount}
								/>
							</label>
						</div>
					)
					: <span className={disabledClass}>{count}</span>
			}

		</div>
	);
};

export default Display;
