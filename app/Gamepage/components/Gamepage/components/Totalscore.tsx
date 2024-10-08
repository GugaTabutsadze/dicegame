import React from 'react'
import styles from "./Totalscore.module.css"

const Totalscore = ({score}:any) => {
  return (
    <div className={styles.scoreContent}>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  )
}

export default Totalscore
