import React, {ChangeEvent} from 'react';
import {boxType, displayType} from '../../App';
import styles from './Display.module.css'

type PropsType = {
  type: boxType
  startValue: number
  maxValue: number
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
  display: number
  setDisplay: (num: number) => void
  showDisplay: displayType
  setShowDisplay: (value: displayType) => void
}

const Display = (props: PropsType) => {
  const classActive = props.display === props.maxValue ? styles.active : '';
  const classes = styles.num + ' ' + classActive;

  //   if(props.startValue < 0) {
  //     props.setShowDisplay('Incorrect value!');
  //   } else if (
  //     props.startValue === props.maxValue
  //     || props.startValue > props.maxValue
  //   ) {
  //     props.setShowDisplay('Incorrect value!');
  //   }
  //   else if (
  //     props.startValue !== props.localStorageStartValue
  //     || props.maxValue !== props.localStorageMaxValue
  //   ) {
  //     props.setShowDisplay('enter values and press "set"');
  //   } else {
  //     props.setShowDisplay(props.localStorageStartValue);
  //   }

  const changeMaxCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeMaxValue(Number(e.currentTarget.value));
  }

  const changeStartCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeStartValue(Number(e.currentTarget.value));
  }

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
