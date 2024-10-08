/* eslint-disable react/jsx-key */
import React from 'react'
import styles from "./SelectNumber.module.css"
import { log } from 'console'

const SelectNumber = ({selectNumber, setSelectNumber}:any) => {
    const arrNumber = [1,2,3,4,5,6]
    console.log(arrNumber);
    

  return (
   <div className={styles.numberContainer}>
     <div className={styles.scoreGameContent}>
       {
         arrNumber.map((value, i) => (
          <div  className={value == selectNumber ? styles.gameNumbers : styles.gameNumber} onClick={() => setSelectNumber(value)} key={i}>
           {value}
          </div>
           ))
       }
     
      </div>
      <p>Select Number</p>
    </div>
  )
}

export default SelectNumber
