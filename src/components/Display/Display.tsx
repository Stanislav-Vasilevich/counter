import React, {ChangeEvent} from "react";
import {boxType} from "../../App";
import styles from './Display.module.css'

type PropsType = {
  type: boxType
  startCount: number
  maxCount: number
  changeStartCounter: (num: number) => void
  changeMaxCounter: (num: number) => void
}

const Display = (props: PropsType) => {
  const classActive = props.startCount === 5 ? 'active' : ''
  const classes = 'num ' + classActive

  const changeMaxCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeMaxCounter(Number(e.currentTarget.value));
  }

  const changeStartCounterHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.changeStartCounter(Number(e.currentTarget.value));
  }

  return (
    <div className="display">
      {
        props.type === 'counter'
          ? <div className={classes}>{props.startCount}</div>
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