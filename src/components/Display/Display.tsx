import React from "react";

type PropsType = {
  count: number
}

const Display = (props: PropsType) => {
  return (
    <div className="display">
      <div className="num">{props.count}</div>
    </div>
  )
}

export default Display;