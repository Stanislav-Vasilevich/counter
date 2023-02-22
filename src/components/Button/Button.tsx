import React, {MouseEvent} from "react";
import s from './Button.module.css';
import {typeDisplay, displayType} from "../../App";
import {typeButton} from "../Box/Box";

type PropsType = {
	name: 'set' | 'inc' | 'reset'
	typeDisplay?: typeDisplay
	setTypeDisplay?: (type: typeDisplay) => void
	typeButton: typeButton
	disabled?: boolean
  count?: number
  setValue?: () => void
  startValue?: number
  maxValue?: number
  display?: displayType
}

const Button = (props: PropsType) => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		console.log('e: ', e.currentTarget.name);

		props.setValue && props.setValue();

		if(props.typeDisplay) {
			if(props.typeDisplay === 'counter') {
				console.log('1: ', props.typeDisplay)
				props.setTypeDisplay && props.setTypeDisplay('setCounter');
			}
			if(props.typeDisplay === 'setCounter') {
				console.log('2: ', props.typeDisplay)
				props.setTypeDisplay && props.setTypeDisplay('counter');
			}
		}
  }

  return (
    <button
      disabled={props.disabled}
      className={s.button}
      onClick={onClickHandler}
			name={props.typeButton}
		>
      {props.name}
    </button>
  )
}

export default Button;
