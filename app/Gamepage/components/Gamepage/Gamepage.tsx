import React, { useState } from 'react'
import styles from "./Gamepage.module.css"
import Startpage from '@/app/Startpage/Startpage'
import Rolldice from './components/Rolldice'
import SelectNumber from './components/SelectNumber'
import Totalscore from './components/Totalscore'


const Gamepage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [selectNumber, setSelectNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [score, setScore] = useState(0)

  const toggleGame = () => {
    setIsGameStarted(prev => !prev)
  }

  const randomNumber = (max:any, min:any) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const rollDice = () => {
    const randomnumber = randomNumber(1,7)
    setCurrentDice((prev) => randomnumber)

    if(selectNumber === randomnumber) {
      setScore(prev => prev + randomnumber)
    }else {
      setScore(prev => prev - 2)
    }
}

  return (
    <div className={styles.GamePageContainer}>
       <div className={styles.scoreContainer}>
           <Totalscore  score={score}/>
           <SelectNumber selectNumber={selectNumber} setSelectNumber={setSelectNumber}/>
       </div>
        <Rolldice currentDice={currentDice} rolldice={rollDice}/>
    </div>
  )
}

export default Gamepage
