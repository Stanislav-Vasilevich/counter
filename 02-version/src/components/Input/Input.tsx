import s from './Input.module.css';

type PropsType = {
  type: 'min' | 'max'
  min: number
  max: number
}

const Input: React.FC<PropsType> = ({type, min, max}) => {
  const changeValue = () => {
    console.log('hi')
  }

  return (
    type === 'min'
      ? <input className={s.input} onInput={changeValue} type="number" value={min}/>
      : <input className={s.input} onInput={changeValue} type="number" value={max}/>
  )
};

export default Input;
