import s from './Set.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
  setMin: (min: number) => void
  setMax: (max: number) => void
  setValues: (min: number, max: number) => void
  setNewMinValue: (value: number) => void
  setNewMaxValue: (value: number) => void
  changeCount: (value: number) => void
}

const Set: React.FC<PropsType> = (
  {
    min,
    max,
    newMin,
    newMax,
    setValues,
    setNewMinValue,
    setNewMaxValue,
    changeCount
  }) => {
  const setMinHandler = (min: number) => {
    setNewMinValue(min);
  }

  const setMaxHandler = (max: number) => {
    setNewMaxValue(max);
  }

  const setNewValues = () => {
    setValues(newMin, newMax);
    changeCount(newMin)
  }

  return (
    <div className={s.Set}>
      <Display type="set"
               min={min}
               max={max}
               newMin={newMin}
               newMax={newMax}
               setMin={setMinHandler}
               setMax={setMaxHandler}
      />

      <div className="dashboard">
        <Button title="set" onClick={setNewValues}/>
      </div>
    </div>
  );
};

export default Set;
