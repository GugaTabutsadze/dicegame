/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Startpage.module.css"
import Link from 'next/link'

const Startpage = ({toggle}) => {
  return (
    <div>
        <div className={styles.StartPageContainer}>
        <img width={649} height={522} src='/images/dices.png' alt='/'/>
      <div className={styles.startbtnContainer}>
        <h1>DICE GAME</h1>
        <button onClick={toggle}>
            Play Now
        </button>
      </div>
      </div>
    </div>
  )
}

export default Startpage
