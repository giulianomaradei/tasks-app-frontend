import React, { useState } from 'react';
import Task from './Task';
import styles from './TaskList.module.css';

function TaskList(props){

    const [page,setPage] = useState(1);

    const tasks = props.tasks.map(task => (
        <Task task={task} key={task.key} id={task.id} finishedTaskHandler={props.finishedTaskHandler} deletedTaskHandler={props.deletedTaskHandler} ></Task>
    ));

    const doneTasks = props.doneTasks.map(task => (
        <Task task={task} key={task.key} id={task.id}></Task>
    ));

    var content = <div className={`${styles.taskList} ${styles.noTasks}`}>No tasks in here...</div>;

    if(tasks.length !==0){
        content = <div className={styles.taskList}>{page === 1 ? tasks : doneTasks}</div>
    }


    return(
        <React.Fragment>
            {content}
        </React.Fragment>
        
    )
}

export default TaskList;