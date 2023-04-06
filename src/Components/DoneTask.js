import React from 'react';
import styles from './Task.module.css'

function DoneTask(props){

    const title = props.task.title;
    const description = props.task.description;

    return(
        <div className={styles.task}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>     
        </div>
    )
}

export default DoneTask;