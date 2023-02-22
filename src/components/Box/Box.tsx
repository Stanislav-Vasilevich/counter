import React, {useEffect} from 'react';
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {typeDisplay, disabledType, displayType, errorType} from '../../App';
import s from './Box.module.css';

type PropsType = {
	typeBox: 'counter' | 'setCounter'
	typeDisplay: typeDisplay
	setTypeDisplay?: (type: typeDisplay) => void
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

export type typeButton = 'inc' | 'reset' | 'set' | 'changeDisplay';

const Box = (props: PropsType) => {
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
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: false});
		} else if(num >= Number(values.max)) {
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: true});
		} else {
			if(num !== Number(values.start)) {
				props.setDisplay('enter values and press "set"');
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: false, inc: true, reset: true});
			} else if(num === Number(values.start)) {
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
			props.setDisplay('Incorrect value!');
			props.setInputsValue({...props.inputsValue, start: true, max: true});
			props.setDisabled({...props.disabled, set: true, inc: true, reset: true});
		} else {
			if(num !== Number(values.max) && num > 0) {
				props.setDisplay('enter values and press "set"');
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: false, inc: true, reset: true});
			} else {
				props.setDisplay(Number(values.start));
				props.setInputsValue({...props.inputsValue, start: false, max: false});
				props.setDisabled({...props.disabled, set: true, inc: false, reset: true});
			}
		}
    props.setMaxValue(num);
  }

  return (
    <div className={s.box}>
      <Display
        typeDisplay={props.typeDisplay}
        startValue={props.startValue}
        maxValue={props.maxValue}
        display={props.display}
        setDisplay={props.setDisplay}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
				error={props.inputsValue}
      />
      <div className={s.buttons}>
        {
          props.typeBox === 'counter'
          ? (
            <>
              <Button
								name={'inc'}
								typeButton={'inc'}
								disabled={props.disabled.inc}
                count={props.startValue}
                setValue={addDisplay}
                display={props.display}
                maxValue={props.maxValue}
              />
              <Button
								name={'reset'}
								typeButton={'reset'}
								disabled={props.disabled.reset}
                count={props.startValue}
                setValue={resetDisplay}
                display={props.display}
                startValue={props.startValue}
                maxValue={props.maxValue}
              />
							<Button
								name={'set'}
								typeButton={'changeDisplay'}
								typeDisplay={props.typeDisplay}
								setTypeDisplay={props.setTypeDisplay}
							/>
            </>
            )
            : (
              <Button
								name={'set'}
								typeButton={'set'}
								typeDisplay={props.typeDisplay}
								setTypeDisplay={props.setTypeDisplay}
								disabled={props.disabled.set}
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
