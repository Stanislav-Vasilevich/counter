import React, {useEffect, useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";
import {boxType} from "../../App";

type PropsType = {
  type: boxType
  startCount: number
  maxCount: number
  display: number
  setDisplay: (num: number) => void
  setStartCount: (num: number) => void
  setMaxCount: (num: number) => void
}

const Box = (props: PropsType) => {
  const [changeStartValue, setChangeStartValue] = useState(0);
  const [changeMaxValue, setChangeMaxValue] = useState(0);

  useEffect(() => {
    let getStartValue = localStorage.getItem('startNumber');
    let getMaxValue = localStorage.getItem('maxNumber');

    if(getStartValue) {
      props.setStartCount(JSON.parse(getStartValue));
      props.setDisplay(JSON.parse(getStartValue));
      setChangeStartValue(JSON.parse(getStartValue));
    }

    if(getMaxValue) {
      props.setMaxCount(JSON.parse(getMaxValue));
      setChangeMaxValue(JSON.parse(getMaxValue));
    }
  }, []);

  // кнопка set
  const startAndMaxCount = () => {
    localStorage.setItem('startNumber', props.startCount.toString());
    localStorage.setItem('maxNumber', props.maxCount.toString());
    props.setDisplay(props.startCount);
  }

  // кнопка inc
  const addCount = () => {
    if(props.startCount <= 0) { //  && props.startCount < props.display
      props.setStartCount(props.startCount + 1);
    }
    props.setDisplay(props.display + 1);
  }

  // кнопка reset
  const resetCount = () => {
    //   setInterval(() => {
    //     if(props.startCount === 0) {
    //       return;
    //     } else {
    //       props.setStartCount(props.startCount);
    //     }
    //     console.log();
    //   }, 50);
    // } else {
    //   return;

    props.setDisplay(props.startCount);
  }

  const changeStartCounter = (num: number) => {
    props.setStartCount(num);
  }

  const changeMaxCounter = (num: number) => {
    props.setMaxCount(num);
  }

  return (
    <div className="box">
      <Display
        type={props.type}
        startCount={props.startCount}
        maxCount={props.maxCount}
        display={props.display}
        setDisplay={props.setDisplay}
        changeStartCounter={changeStartCounter}
        changeMaxCounter={changeMaxCounter}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
      />
      <div className="buttons">
        {
          props.type === 'counter'
          ? (
            <>
              <Button
                text={'inc'}
                count={props.startCount}
                changeCount={addCount}
                display={props.display}
                maxCount={props.maxCount}
              />
              <Button
                text={'reset'}
                count={props.startCount}
                changeCount={resetCount}
                display={props.display}
                startCount={props.startCount}
                maxCount={props.maxCount}
              />
            </>
            )
            : (
              <Button
                text={'set'}
                count={props.startCount}
                changeCount={startAndMaxCount}
              />
            )
        }
      </div>
    </div>
  );
}

export default Box;
