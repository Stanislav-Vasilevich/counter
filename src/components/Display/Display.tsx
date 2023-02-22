import React, {ChangeEvent} from 'react';
import {typeDisplay, displayType, errorType} from '../../App';
import s from './Display.module.css'

type PropsType = {
	typeDisplay: typeDisplay
	startValue: number
	maxValue: number
	changeStartValue: (num: number) => void
	changeMaxValue: (num: number) => void
	display: displayType
	setDisplay: (num: number) => void
	error: errorType
}

const Display = (props: PropsType) => {
	const classText = typeof props.display === 'string' ? s.text : '';
	const classDisplayMaxValue = props.maxValue === props.display ? s.maxValue : ''
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
				props.typeDisplay === 'counter'
					// экран с номером
					? <div className={`${s.num} ${classText} ${classDisplayMaxValue} ${classTextErrorStart} ${classTextErrorMax}`}>
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
