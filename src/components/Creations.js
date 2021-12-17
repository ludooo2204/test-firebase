import React from 'react'
import styles from "./Main.module.css";
import Card from './Card'

const Creations = () => {
    return (
        <div className={styles.main}>
            <h1>Mes ceato</h1>
            <Card />
        </div>
    )
}

export default Creations
