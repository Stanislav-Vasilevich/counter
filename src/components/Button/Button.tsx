import React from "react";
import styles from './Button.module.css';
import {displayType} from "../../App";

type PropsType = {
  text: string
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
      disabled={
        props.display === props.startValue && props.text === 'reset'
        ||
        props.display === props.maxValue && props.text === 'inc'
      }
      className={styles.button}
      onClick={onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button;