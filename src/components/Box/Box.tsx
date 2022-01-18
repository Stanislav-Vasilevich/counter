import React, {useEffect, useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType} from "../../App";

type PropsType = {
  type: boxType
}

const Box = (props: PropsType) => {
  let [startCount, setStartCount] = useState<number>(0); // 4
  let [maxCount, setMaxCount] = useState<number>(5);

  useEffect(() => {
    console.log("1 useEffect: ", startCount);
  }, []);

  useEffect(() => {
    console.log('2 useEffect: ', startCount);
  }, [startCount] )

  const addCount = () => {
    if(startCount >= 0 && startCount < 5) {
      setStartCount(++startCount);
    }
  }

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

  // change useState startCount
  const changeStartCounter = (num: number) => {
    setStartCount(num); // 4
    console.log('changeStartCounter: ', num);
  }

  // change useState maxCount
  const changeMaxCounter = (num: number) => {
    setMaxCount(num);
  }

  // кнопка SET
  const startMaxCount = () => {
    localStorage.setItem('startNumber', startCount.toString());
    localStorage.setItem('maxNumber', maxCount.toString());

    console.log('SET: ', startCount);

    setStartCount(startCount);
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
                changeCount={startMaxCount}
              />
            )
        }
      </div>
    </div>
  );
}

export default Box;