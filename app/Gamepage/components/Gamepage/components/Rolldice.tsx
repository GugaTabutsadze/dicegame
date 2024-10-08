/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from "./Rolldice.module.css"

const Rolldice = ({currentDice, rolldice}:any) => {

  return (
    <div className={styles.rollDiceContainer}>
       <div className={styles.DiceContainer}>
         <div className={styles.dice} onClick={rolldice}>
           <img src={`/images/dice_${currentDice}.png`} alt='image1' />
         </div>
         <p>Click On Dice Roll</p>
       </div>
    </div>
  )
}

export default Rolldice
