import React, {useEffect, useState} from 'react';
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType, disabledType, displayType, errorType} from '../../App';
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
	inputsValue: errorType
	setInputsValue: (error: errorType) => void
}

const Box = (props: PropsType) => {
	console.log('render Box')

	const getValues = () => {
		const values = {
			start: localStorage.getItem('startNumber'),
			max: localStorage.getItem('maxNumber')
		}
		return values;
	}

  useEffect(() => {
		console.log('render Box useEffect')
    const values = getValues();

    if(values.start) {
			const startValue = JSON.parse(values.start);

      props.setStartValue(startValue);
      props.setDisplay(startValue);
    }

    if(values.max) {
			const maxValue = JSON.parse(values.max);

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
		let display = props.display;

		if(typeof display === "number") {
			props.setDisplay(++display);

			if(display >= props.maxValue) {
				props.setDisplay(props.maxValue);
				props.setDisabled({...props.disabled, set: true, inc: true, reset: false});
			} else {
				props.setDisabled({...props.disabled, set: true, inc: false, reset: false});
			}
		}
  }

  // кнопка reset
  const resetDisplay = () => {
		let num = props.display;

		setInterval(() => {
			if(num > props.startValue) {
				if(typeof num === "number") {
					num = num - 1;
					props.setDisplay(num);
				}
			}
		}, 50);
		props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
  }

	// input start value
  const changeStartValue = (num: number) => {
		const values = getValues();

		if(num < 0) {
			console.log('1: ', 1)
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: false});
		} else if(num >= Number(values.max)) {
			console.log('2: ', 2)
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: true});
		} else {
			console.log('3: ', 3)
			if(num !== Number(values.start)) {
				console.log('4: ', 4)
				props.setDisplay('enter values and press "set"');
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: false, inc: true, reset: true});
			} else if(num === Number(values.start)) {
				console.log('5: ', 5)
				props.setDisplay(num);
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
			}
		}
		props.setStartValue(num);
  }

	// input max value
  const changeMaxValue = (num: number) => {
		const values = getValues();

		if(num <= Number(values.start)) {
			console.log('6: ', 6)
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: true});
			props.setDisabled({...props.disabled, set: true, inc: true, reset: true});
		} else {
			console.log('7: ', 7)
			if(num !== Number(values.max) && num > 0) {
				props.setDisplay('enter values and press "set"');
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: false, inc: true, reset: true});
			} else {
				console.log('8: ', 8)
				props.setDisplay(Number(values.start));
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
			}
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
				error={props.inputsValue}
      />
      <div className={styles.buttons}>
        {
          props.type === 'counter'
          ? (
            <>
              <Button
								name={'inc'}
								disabled={props.disabled.inc}
                type={'inc'}
                count={props.startValue}
                setValue={addDisplay}
                display={props.display}
                maxValue={props.maxValue}
              />
              <Button
								name={'reset'}
								disabled={props.disabled.reset}
								type={'reset'}
                count={props.startValue}
                setValue={resetDisplay}
                display={props.display}
                startValue={props.startValue}
                maxValue={props.maxValue}
              />
							<Button
								name={'set'}
								type={'setCount'}
							/>
            </>
            )
            : (
              <Button
								name={'set'}
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
