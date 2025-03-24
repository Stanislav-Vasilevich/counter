import s from './Button.module.css';

type PropsType = {
  title: string
  className?: string
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<PropsType> = ({title, className, onClick, disabled}) => {
  return <button className={className ? className : s.button} onClick={onClick} disabled={disabled}>{title}</button>
};

export default Button;
