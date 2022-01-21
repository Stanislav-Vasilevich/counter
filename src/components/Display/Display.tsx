import React, {ChangeEvent, useEffect, useState} from 'react';
import {boxType} from "../../App";
import styles from './Display.module.css'

type PropsType = {
  type: boxType
  startCount: number
  maxCount: number
  display: number
  changeStartCounter: (num: number) => void
  changeMaxCounter: (num: number) => void
  setDisplay: (num: number) => void
  changeStartValue: number
  changeMaxValue: number
}

const Display = (props: PropsType) => {
  const classActive = props.display === props.maxCount ? styles.active : '';
  const classes = styles.num + ' ' + classActive;

  console.log(classes)

  const changeMaxCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeMaxCounter(Number(e.currentTarget.value));
  }

  const changeStartCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeStartCounter(Number(e.currentTarget.value));
  }

  let changeInputValue = props.startCount > props.changeStartValue || props.maxCount < props.changeMaxValue;

  const displayText = changeInputValue
    ? <div className={styles.text}>Enter values and press 'set'</div>
    : <div className={classes}>{props.display}</div>;

  return (
    <div className="display">
      {
        props.type === 'counter'
          // экран с номером
          ? displayText
          // экран с вводом данных
          : (
            <div className={styles.display}>
              <div className={styles.row}>
                <span>max value:</span>
                <input
                  type="number"
                  value={props.maxCount}
                  onChange={changeMaxCounterHandler}
                />
              </div>
              <div className={styles.row}>
                <span>start value:</span>
                <input
                  type="number"
                  value={props.startCount}
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
