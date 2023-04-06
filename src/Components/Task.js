import React from 'react';
import styles from './Task.module.css'
import trash from '../Assets/Images/trash.png'

function Task(props){

    const title = props.task.title;
    const description = props.task.description;

    function doneButtonHandler(event){
        props.finishedTaskHandler(props.id);
    }

    function deleteButtonHandler(event){
        props.deletedTaskHandler(props.id);
    }

    return(
        <div className={styles.task}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttonSection}>
                <button className={styles.done} onClick={doneButtonHandler}></button>
                <button className={styles.delete} onClick={deleteButtonHandler}><img className={styles.deleteImage} src={trash} alt="trash"></img></button>
            </div>
     
        </div>
    )
}

export default Task;