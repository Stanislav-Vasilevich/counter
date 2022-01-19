import React, {useEffect, useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType} from "../../App";

type PropsType = {
  type: boxType
}

const Box = (props: PropsType) => {
  let [startCount, setStartCount] = useState<number>(0);
  let [maxCount, setMaxCount] = useState<number>(5);

  // получаем данные из хранилища при первой отрисовки и устанавливаем в state
  useEffect(() => {
    let getStartValue = localStorage.getItem('startNumber');
    let getMaxValue = localStorage.getItem('maxNumber');

    if(getStartValue) {
      setStartCount(JSON.parse(getStartValue));
    }

    if(getMaxValue) {
      setMaxCount(JSON.parse(getMaxValue));
    }
  }, []);

  // useEffect(() => {
  //   console.log('useEffect[startCount]');
  //   setStartCount(startCount);
  // }, [startCount]);

  // кнопка inc
  const addCount = () => {
    if(startCount >= 0 && startCount < 5) {
      setStartCount(++startCount);
    }
  }

  // кнопка reset
  const resetCount = () => {
    if(startCount !== 0) {
      setInterval(() => {
        if(startCount === 0) {
          return;
        } else {
          setStartCount(--startCount);
        }
      }, 50);
    }
  }

  const changeStartCounter = (num: number) => {
    setStartCount(num);
  }

  const changeMaxCounter = (num: number) => {
    setMaxCount(num);
  }

  // кнопка SET
  const startAndMaxCount = () => {
    localStorage.setItem('startNumber', startCount.toString());
    localStorage.setItem('maxNumber', maxCount.toString());
  }

  return (
    <div className="box">
      <Display
        type={props.type}
        startCount={startCount}
        maxCount={maxCount}
        changeStartCounter={changeStartCounter}
        changeMaxCounter={changeMaxCounter}
      />
      <div className="buttons">
        {
          props.type === 'counter'
          ? (
            <>
              <Button
                text={'inc'}
                count={startCount}
                changeCount={addCount}
              />
              <Button
                text={'reset'}
                count={startCount}
                changeCount={resetCount}
              />
            </>
            )
            : (
              <Button
                text={'set'}
                count={startCount}
                changeCount={startAndMaxCount}
              />
            )
        }
      </div>
    </div>
  );
}

export default Box;
