"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Startpage from "./Startpage/Startpage";
import { useState } from "react";
import Gamepage from "./Gamepage/components/Gamepage/Gamepage";


export default function Home() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGame = () => {
    setIsGameStarted(prev => !prev)
  } 
  
  return (
    <div className={styles.GameContainer}>
      {isGameStarted ? <Gamepage /> : <Startpage toggle={toggleGame} />}
    </div>
  );
}
