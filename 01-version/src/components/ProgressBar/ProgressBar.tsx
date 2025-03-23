import s from './ProgressBar.module.css';
import {StyleType} from '../Dashboard/Dashboard';

type PropsType = {
  style: StyleType
}

const ProgressBar: React.FC<PropsType> = ({style}) => {
  return (
    <div className={s.line}>
      <span className={s.inside} style={style}></span>
    </div>
  );
};

export default ProgressBar;
