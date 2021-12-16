import React, {useState} from "react";
import {countType} from "../../App";

type PropsType = {
  count: countType
}

const Display = (props: PropsType) => {
  return (
    <div className="display">
      <div className="num">{props.count}</div>
    </div>
  )
}

export default Display;