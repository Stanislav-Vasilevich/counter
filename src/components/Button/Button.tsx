import React from "react";

type PropsType = {
  text: string
  changeCount: () => void
}

const Button = (props: PropsType) => {
  const onClickHandler = () => {
    props.changeCount();
  }

  return (
    <button
      className="button"
      onClick={onClickHandler}>
      {props.text}
    </button>
  )
}

export default Button;