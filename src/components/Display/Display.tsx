import React from "react";

type PropsType = {
  count: number
}

const Display = (props: PropsType) => {
  const classActive = props.count === 5 ? 'active' : ''
  const classes = 'num ' + classActive
  return (
    <div className="display">
      <div className={classes}>{props.count}</div>
    </div>
  )
}

export default Display;