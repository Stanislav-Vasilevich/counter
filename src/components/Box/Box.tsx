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

export type errorType = {
	start: boolean
	max: boolean
}

const Box = (props: PropsType) => {
	const [error, setError] = useState<errorType>({
		start: false,
		max: false,
	});

	const getValues = () => {
		const values = {
			start: localStorage.getItem('startNumber'),
			max: localStorage.getItem('maxNumber')
		}
		return values;
	}

  useEffect(() => {
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
			console.log('4')
			props.setDisplay('Incorrect value!');
			setError({...error, start: true, max: false});
		} else if(num >= Number(values.max)) {
			console.log('5')
			props.setDisplay('Incorrect value!');
			setError({...error, start: true, max: true});
		} else {
			console.log('6')
			if(num !== Number(values.start)) {
				console.log('7')
				props.setDisplay('enter values and press "set"');
				setError({...error, start: false, max: false});
			} else if(num === Number(values.start)) {
				console.log('8')
				props.setDisplay(num);
				setError({...error, start: false, max: false});
			}
		}

		props.setStartValue(num);
		props.setDisabled({...props.disabled, set: false, inc: true});
  }

	// input max value
  const changeMaxValue = (num: number) => {
		const values = getValues();

		if(num <= Number(values.start)) {
			console.log('1')
			props.setDisplay('Incorrect value!');
			setError({...error, start: true, max: true});
		} else {
			console.log('2')
			if(num !== Number(values.max) && num > 0) {
				props.setDisplay('enter values and press "set"');
				setError({...error, start: false, max: false});
			} else {
				console.log('3')
				props.setDisplay(Number(values.start));
			}
		}
    props.setMaxValue(num);
		props.setDisabled({...props.disabled, set: false, inc: true});
  }

  return (
    <div className={styles.box}>
      <Display
				error={error}
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
