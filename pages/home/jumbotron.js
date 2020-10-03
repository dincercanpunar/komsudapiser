import React from 'react'
import styles from './jumbotron.module.css';

function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.jumbotronLeft}> 
                <h2>bir tabak ev yemeği</h2>
                <p>Komşuda pişen yemeklerden bir tabak alabileceğin veya pişirdiğin yemeklerden bir tabak verebileceğin platform.</p>
            </div>
            <div className={styles.jumbotronRight}> 
                <img 
                    alt="Logo" 
                    src="/jumbotron.png"
                />
            </div>
        </div>
    )
}

export default Jumbotron;