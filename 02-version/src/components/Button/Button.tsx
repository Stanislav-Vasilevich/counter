import styles from './Button.module.css';
import * as React from "react";

type PropsType = {
  title: string
  className?: string
  onClick: () => void
  disabled: boolean
}

const Button: React.FC<PropsType> = ({title, className, onClick, disabled}) => {
  return (
    <button
      className={className ? className : styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
};

export default Button;
