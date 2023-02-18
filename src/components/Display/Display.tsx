import React, {ChangeEvent} from 'react';
import {boxType, displayType} from '../../App';
import s from './Display.module.css'

type PropsType = {
  type: boxType
  startValue: number
  maxValue: number
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
  display: displayType
  setDisplay: (num: number) => void
}

const Display = (props: PropsType) => {
  const classActive = props.display === props.maxValue ? s.active : '';
  const classErrorText = props.startValue < 0 ? s.errorText : '';
  const classInputError = props.startValue < 0 ? s.inputError : '';
  const classText = typeof props.display === 'string' ? s.text : '';

  const changeMaxCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeMaxValue(Number(e.currentTarget.value));
  }

  const changeStartCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeStartValue(Number(e.currentTarget.value));
  }

  return (
    <div className={s.display}>
      {
        props.type === 'counter'
          // экран с номером
          ? <div className={`${s.num} ${classActive} ${classErrorText} ${classText}`}>{props.display}</div>
          // экран с вводом данных
          : (
            <div className={s.display}>
              <div className={s.row}>
                <span className={s.label}>max value:</span>
                <input
									className={s.input}
                  type="number"
                  value={props.maxValue}
                  onChange={changeMaxCounterHandler}
                />
              </div>
              <div className={s.row}>
                <span className={s.label}>start value:</span>
                <input
									className={`${s.input} ${classInputError}`}
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
