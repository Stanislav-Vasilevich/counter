import React, {useEffect, useState} from 'react';
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType, disabledType, displayType} from '../../App';
import styles from './Box.module.css';

type PropsType = {
  type: boxType
	disabled: disabledType
	setDisabled: (value: disabledType) => void
  startValue: number
  maxValue: number
  setStartValue: (num: number) => void
  setMaxValue: (num: number) => void
  display: displayType
  setDisplay: (num: displayType) => void
}

const Box = (props: PropsType) => {
  useEffect(() => {
    let getMaxValue = localStorage.getItem('maxNumber');
    let getStartValue = localStorage.getItem('startNumber');

    if(getStartValue) {
			const startValue = JSON.parse(getStartValue);

      props.setStartValue(startValue);
      props.setDisplay(startValue);
    }

    if(getMaxValue) {
			const maxValue = JSON.parse(getMaxValue);

      props.setMaxValue(maxValue);
    }
  }, []);

  // кнопка set
  const setValue = () => {
    localStorage.setItem('startNumber', props.startValue.toString());
    localStorage.setItem('maxNumber', props.maxValue.toString());

    props.setDisplay(props.startValue);
		props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
  }

  // кнопка inc
  const addDisplay = () => {
		console.log('inc');
		let display = props.display;

		if(typeof display === "number") {
			console.log('hi')
			props.setDisplay(++display);
			// props.setDisabled({...props.disabled, set: true, inc: false, reset: false});

			if(display >= props.maxValue) {
				console.log('bye')
				props.setDisplay(props.maxValue);
				props.setDisabled({...props.disabled, set: true, inc: true, reset: false});
			} else {
				console.log('hello')
				props.setDisabled({...props.disabled, set: true, inc: false, reset: false});
			}
		}
  }

  // кнопка reset
  const resetDisplay = () => {
		console.log('reset');
		let num = props.display;

		setInterval(() => {
			if(num > props.startValue) {
				if(typeof num === "number") {
					num = num - 1;
					props.setDisplay(num);
				}
			}
		}, 50);
		console.log('hhh')
		props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
  }

	// input start value
  const changeStartValue = (num: number) => {
		console.log('input start');

		if(num < 0) {
			props.setDisplay('Incorrect value!');
		} else {
			props.setDisplay('enter values and press "set"');
		}
		props.setStartValue(num);
		props.setDisabled({...props.disabled, set: false, inc: true});
  }

	// input max value
  const changeMaxValue = (num: number) => {
		if(num > 0) {
			props.setDisplay('Incorrect value!');
		} else {
			props.setDisplay('enter values and press "set"');
		}
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
      />
      <div className={styles.buttons}>
        {
          props.type === 'counter'
          ? (
            <>
              <Button
								disabled={props.disabled.inc}
                type={'inc'}
                count={props.startValue}
                setValue={addDisplay}
                display={props.display}
                maxValue={props.maxValue}
              />
              <Button
								disabled={props.disabled.reset}
								type={'reset'}
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
								disabled={props.disabled.set}
                type={'set'}
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
