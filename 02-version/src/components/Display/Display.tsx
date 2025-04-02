import s from './Display.module.css';
import InputMin from '../InputMin/InputMin';
import InputMax from '../InputMax/InputMax';

type PropsType = {
	type: 'set' | 'get'
	min: number
	max: number
	newMin?: number
	newMax?: number
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
	const disabledClass = count === max ? s.error : '';
	const setString = typeof(count) === 'string' ? s.text : '';
	const error = newMin >= max || newMin < min ? s.error : '';

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
									max={max}
									newMin={newMin}
									newMax={newMax}
									setNewValue={setMinHandler}
									count={count}
									setCount={setCount}
								/>
							</label>
							<label className={s.label}>
								max value:
								<InputMax
									min={min}
									newMin={newMin}
									newMax={newMax}
									setNewValue={setMaxHandler}
									count={count}
									setCount={setCount}
								/>
							</label>
						</div>
					)
					: <span className={`${s.count} ${setString} ${disabledClass} ${error}`}>{count}</span>
			}
		</div>
	);
};

export default Display;
