import s from './Set.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

type PropsType = {
  min: number
  max: number
  newMin: number
  newMax: number
	setProgress: (newProgress: number) => void
  setMin: (min: number) => void
  setMax: (max: number) => void
  setValues: (newMin: number, newMax: number) => void
  setNewMinValue: (value: number) => void
  setNewMaxValue: (value: number) => void
  changeCount: (newMin: number) => void
  count: number
  setCount: (value: number) => void
}

const Set: React.FC<PropsType> = (
  {
    min,
    max,
    newMin,
    newMax,
		setProgress,
    setValues,
    setNewMinValue,
    setNewMaxValue,
    changeCount,
    count,
    setCount
  }) => {
  const setMinHandler = (min: number) => {
    setNewMinValue(min);
  }

  const setMaxHandler = (max: number) => {
    setNewMaxValue(max);
  }

  const setNewValues = () => {
		const newProgress = newMax - newMin;
		setProgress(newProgress);
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
               count={count}
               setCount={setCount}
      />

      <div className="dashboard">
        <Button title="set" onClick={setNewValues} disabled={
          newMin === min && newMax === max
          || newMin >= newMax
          || newMin < 0
          || newMin >= newMax
        }
        />
      </div>
    </div>
  );
};

export default Set;
