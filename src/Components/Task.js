import React from 'react';
import styles from './Task.module.css'
import trash from '../Assets/Images/trash.png'

function Task(props){

    const title = props.task.title;
    const description = props.task.description;

    return(
        <div className={styles.task}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttonSection}>
                <button className={styles.done}></button>
                <button className={styles.delete}><img className={styles.deleteImage} src={trash} alt="trash"></img></button>
            </div>
     
        </div>
    )
}

export default Task;