import styles from './Display.module.css';
import InputMin from '../InputMin/InputMin';
import InputMax from '../InputMax/InputMax';
import * as React from "react";

type PropsType = {
	type: 'set' | 'get'
	min: number
	max: number
	newMin: number
	newMax: number
	setMin: (min: number) => void
	setMax: (max: number) => void
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
	const disabledClass = count === max ? styles.error : '';
	const setString = typeof(count) === 'string' ? styles.text : '';
	const error = newMin < 0 || newMin >= newMax ? styles.error : '';

	const setMinHandler = (min: number) => {
		setMin(min);
	}

	const setMaxHandler = (max: number) => {
		setMax(max);
	}

	return (
		<div className={styles.display}>
			{
				type === 'set'
					? (
						<div className={styles.form}>
							<label className={styles.label}>
								start value:
								<InputMin
									min={min}
									count={count}
									newMin={newMin}
									newMax={newMax}
									setNewValue={setMinHandler}
									setCount={setCount}
								/>
							</label>
							<label className={styles.label}>
								max value:
								<InputMax
									min={min}
									max={max}
									count={count}
									newMin={newMin}
									newMax={newMax}
									setNewValue={setMaxHandler}
									setCount={setCount}
								/>
							</label>
						</div>
					)
					: <span className={`${styles.count} ${setString} ${disabledClass} ${error}`}>{count}</span>
			}
		</div>
	);
};

export default Display;