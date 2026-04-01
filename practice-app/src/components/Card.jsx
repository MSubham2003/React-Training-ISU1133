import React from "react";
import styles from "../style/Card.module.css";
function Card() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>This is a Card</h2>
            <p>Reusable component with scoped CSS.</p>
            {/* Show generated class */}
            <p>Generated class: {styles.container}, {styles.title}</p>
        </div>
    );
}

export default Card;