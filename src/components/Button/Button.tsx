import React from "react";

type PropsType = {
  text: string
  count?: number
  changeCount: () => void
}

const Button = (props: PropsType) => {
  const onClickHandler = () => {
    props.changeCount();
  }

  return (
    <button
      disabled={
        props.count === 0 && props.text === 'reset'
        ||
        props.count === 5 && props.text === 'inc'
      }
      className="button"
      onClick={onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button;