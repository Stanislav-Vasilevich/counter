import styles from './ProgressBar.module.css';
import * as React from "react";

type PropsType = {
  length: number
}

const ProgressBar: React.FC<PropsType> = ({length}) => {

  const style = {width: `${length}%`};

  console.log('style: ', style);

  return (
    <div className={styles.line}>
      <span className={styles.inside} style={style}></span>
    </div>
  );
};

export default ProgressBar;
