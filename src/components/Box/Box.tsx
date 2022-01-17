import React, {useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType} from "../../App";

type PropsType = {
  type: boxType
}

const Box = (props: PropsType) => {
  let [startCount, setStartCount] = useState<number>(0);
  let [maxCount, setMaxCount] = useState<number>(5);

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

  const changeStartCounter = (num: number) => {
    setStartCount(num);
  }

  const changeMaxCounter = (num: number) => {
    setMaxCount(num);
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
                changeCount={resetCount}
              />
            )
        }

      </div>
    </div>
  );


}

export default Box;