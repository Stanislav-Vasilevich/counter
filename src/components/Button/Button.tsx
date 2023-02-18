import React, {useState} from "react";
import s from './Button.module.css';
import {displayType} from "../../App";

type PropsType = {
	disabled: boolean
  type: string
  count?: number
  setValue: () => void
  startValue?: number
  maxValue?: number
  display?: displayType
}

const Button = (props: PropsType) => {
  const onClickHandler = () => {
    props.setValue();
  }

  return (
    <button
      disabled={props.disabled}
      className={s.button}
      onClick={onClickHandler}
		>
      {props.type}
    </button>
  )
}

export default Button;
