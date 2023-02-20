import React, {ChangeEvent} from 'react';
import {boxType, displayType} from '../../App';
import s from './Display.module.css'
import {errorType} from "../Box/Box";

type PropsType = {
	type: boxType
	startValue: number
	maxValue: number
	changeStartValue: (num: number) => void
	changeMaxValue: (num: number) => void
	display: displayType
	setDisplay: (num: number) => void
	error: errorType
}

const Display = (props: PropsType) => {
	console.log('start: ', props.error.start)
	console.log('max: ', props.error.max)

	const classText = typeof props.display === 'string' ? s.text : '';
	const classTextErrorStart = props.error.start ? s.errorText : '';
	const classTextErrorMax = props.error.max ? s.errorText : '';
	const classInputErrorStart = props.error.start ? s.inputError : '';
	const classInputErrorMax = props.error.max ? s.inputError : '';

	const changeMaxCounterHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.changeMaxValue(Number(e.currentTarget.value));
	}

	const changeStartCounterHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.changeStartValue(Number(e.currentTarget.value));
	}

	return (
		<div className={s.display}>
			{
				props.type === 'counter'
					// экран с номером
					? <div className={`${s.num} ${classText} ${classTextErrorStart} ${classTextErrorMax}`}>
						{props.display}
					</div>
					// экран с вводом данных
					: (
						<div className={s.display}>
							<div className={s.row}>
								<span className={s.label}>max value:</span>
								<input
									className={`${s.input} ${classInputErrorMax}`}
									type="number"
									value={props.maxValue}
									onChange={changeMaxCounterHandler}
								/>
							</div>
							<div className={s.row}>
								<span className={s.label}>start value:</span>
								<input
									className={`${s.input} ${classInputErrorStart}`}
									type="number"
									value={props.startValue}
									onChange={changeStartCounterHandler}
								/>
							</div>
						</div>
					)
			}
		</div>
	)
}

export default Display;
