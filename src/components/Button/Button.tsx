import React from "react";

type PropsType = {
  text: string
  count?: number
  changeCount: () => void
  startCount?: number
  maxCount?: number
  display?: number
}

const Button = (props: PropsType) => {
  const onClickHandler = () => {
    props.changeCount();
  }

  return (
    <button
      disabled={
        props.display === props.startCount && props.text === 'reset'
        ||
        props.display === props.maxCount && props.text === 'inc'
      }
      className="button"
      onClick={onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button;