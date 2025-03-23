type PropsType = {
  title: string
  className: string
  onClick: () => void
  disabled: boolean
}

const Button: React.FC<PropsType> = ({title, className, onClick, disabled}) => {
  return <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
};

export default Button;
