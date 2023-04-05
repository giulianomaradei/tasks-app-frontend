import React from 'react';
import Task from './Task';
import styles from './TaskList.module.css';

function TaskList(props){

    const tasks = props.tasks.map(task => (
        <Task task={task}></Task>
    ));


    return(
        <div className={styles.taskList}>
            {tasks}
        </div>
    )
}

export default TaskList;