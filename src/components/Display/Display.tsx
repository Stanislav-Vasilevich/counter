import React, {ChangeEvent, useEffect, useState} from 'react';
import {boxType, displayType} from "../../App";
import styles from './Display.module.css'

type PropsType = {
  type: boxType
  startValue: number
  maxValue: number
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
  display: number
  setDisplay: (num: number) => void
  localStorageStartValue: number
  localStorageMaxValue: number
  showDisplay: displayType
  setShowDisplay: (value: displayType) => void
  showNewDisplay: () => void
}

const Display = (props: PropsType) => {
  const classActive = props.display === props.maxValue ? styles.active : '';
  const classes = styles.num + ' ' + classActive;

  const changeMaxCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeMaxValue(Number(e.currentTarget.value));
  }

  const changeStartCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeStartValue(Number(e.currentTarget.value));
  }

  console.log('localStorageStartValue', props.localStorageStartValue);
  console.log('localStorageMaxValue', props.localStorageMaxValue);
  console.log('startValue', props.startValue);
  console.log('maxValue', props.maxValue);
  console.log('display', props.display);
  console.log('show-display: ', props.showDisplay);

  return (
    <div className={styles.display}>
      {
        props.type === 'counter'
          // экран с номером
          ? <div className={classes}>{props.display}</div>
          // экран с вводом данных
          : (
            <div className={styles.display}>
              <div className={styles.row}>
                <span>max value:</span>
                <input
                  type="number"
                  value={props.maxValue}
                  onChange={changeMaxCounterHandler}
                />
              </div>
              <div className={styles.row}>
                <span>start value:</span>
                <input
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
