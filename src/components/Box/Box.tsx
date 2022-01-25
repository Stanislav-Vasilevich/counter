import React, {useEffect, useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType, displayType} from "../../App";
import styles from './Box.module.css';

type PropsType = {
  type: boxType
  startValue: number
  maxValue: number
  setStartValue: (num: number) => void
  setMaxValue: (num: number) => void
  display: number
  setDisplay: (num: number) => void
  showDisplay: displayType
  setShowDisplay: (value: displayType) => void
  localStorageStartValue: number
  setLocalStorageStartValue: (num: number) => void
  localStorageMaxValue: number
  setLocalStorageMaxValue: (num: number) => void
  showNewDisplay: (num: number) => void
}

const Box = (props: PropsType) => {
  useEffect(() => {
    let getStartValue = localStorage.getItem('startNumber');
    let getMaxValue = localStorage.getItem('maxNumber');

    if(getStartValue) {
      props.setStartValue(JSON.parse(getStartValue));
      props.setDisplay(JSON.parse(getStartValue));
      props.setLocalStorageStartValue(JSON.parse(getStartValue));
    }

    if(getMaxValue) {
      props.setMaxValue(JSON.parse(getMaxValue));
      props.setLocalStorageMaxValue(JSON.parse(getMaxValue));
    }
  }, []);

  // кнопка set
  const setValue = () => {
    localStorage.setItem('startNumber', props.startValue.toString());
    localStorage.setItem('maxNumber', props.maxValue.toString());

    props.setDisplay(props.startValue);
  }

  // кнопка inc
  const addDisplay = () => {
    props.setDisplay(props.display + 1);
  }

  // кнопка reset
  const resetDisplay = () => {
    //   setInterval(() => {
    //     if(props.startCount === 0) {
    //       return;
    //     } else {
    //       props.setStartCount(props.startCount);
    //     }
    //     console.log();
    //   }, 50);
    // } else {
    //   return;

    props.setDisplay(props.startValue);
  }

  const changeStartValue = (num: number) => {
    props.setStartValue(num);

    props.showNewDisplay(num);
  }

  const changeMaxValue = (num: number) => {
    props.setMaxValue(num);
  }

  return (
    <div className={styles.box}>
      <Display
        type={props.type}
        startValue={props.startValue}
        maxValue={props.maxValue}
        display={props.display}
        setDisplay={props.setDisplay}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        localStorageStartValue={props.localStorageStartValue}
        localStorageMaxValue={props.localStorageMaxValue}
        showDisplay={props.showDisplay}
        setShowDisplay={props.setShowDisplay}
        showNewDisplay={props.showNewDisplay}
      />
      <div className={styles.buttons}>
        {
          props.type === 'counter'
          ? (
            <>
              <Button
                text={'inc'}
                count={props.startValue}
                setValue={addDisplay}
                display={props.display}
                maxValue={props.maxValue}
              />
              <Button
                text={'reset'}
                count={props.startValue}
                setValue={resetDisplay}
                display={props.display}
                startValue={props.startValue}
                maxValue={props.maxValue}
              />
            </>
            )
            : (
              <Button
                text={'set'}
                count={props.startValue}
                setValue={setValue}
              />
            )
        }
      </div>
    </div>
  );
}

export default Box;
