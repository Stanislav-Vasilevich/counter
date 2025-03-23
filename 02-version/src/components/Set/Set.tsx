import s from './Set.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

type PropsType = {
  min: number
  max: number
}

const Set: React.FC<PropsType> = ({min, max}) => {
  return (
    <div className={s.Set}>
      <Display type="set" min={min} max={max}/>

      <div className="dashboard">
        <Button title="set" onClick={() => {}} disabled={true}/>
      </div>
    </div>
  );
};

export default Set;
