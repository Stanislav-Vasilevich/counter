import React, {useState} from "react";
import Display from "./../Display/Display";
import Button from "./../Button/Button";

const Box = () => {
  let [count, setCount] = useState<number>(0);

  const addCount = () => {
    if(count >= 0 && count < 5) {
      setCount(++count);
    }
  }

  const resetCount = () => {
    if(count !== 0) {
      setInterval(() => {
        if(count === 0) {
          return;
        } else {
          setCount(--count);
        }
      }, 50);
    }
  }

  return (
    <div className="box">
      <Display count={count}/>
      <div className="buttons">
        <Button
          text={'inc'}
          count={count}
          changeCount={addCount}
        />
        <Button
          text={'reset'}
          count={count}
          changeCount={resetCount}
        />
      </div>
    </div>
  );
}

export default Box;