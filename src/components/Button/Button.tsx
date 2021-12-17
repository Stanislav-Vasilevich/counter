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
      disabled={props.count === 0}
      className="button"
      onClick={onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button;