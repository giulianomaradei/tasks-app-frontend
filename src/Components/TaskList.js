import React, { useState } from 'react';
import Task from './Task';
import styles from './TaskList.module.css';
import TabSelector from './TabSelector';
import DoneTask from './DoneTask';

function TaskList(props){

    const [page,setPage] = useState(1);

    function setPageHandler(page){
        setPage(page);
    }

    const tasks = props.tasks.map(task => (
        <Task task={task} key={task.key} id={task.id} finishedTaskHandler={props.finishedTaskHandler} deletedTaskHandler={props.deletedTaskHandler} ></Task>
    ));

    const doneTasks = props.doneTasks.map(task => (
        <DoneTask task={task} key={task.key} id={task.id}></DoneTask>
        
    ));

    var content = <div className={styles.noTasks}>No tasks in here...</div>;

    if(page === 1){
        content = (tasks.length !== 0 ? tasks : <div className={styles.noTasks}>No tasks in here...</div>);
    }
    else{
        content = (doneTasks.length !== 0 ? doneTasks : <div className={styles.noTasks}>No done tasks in here...</div>);
    }


    return(
        <div className={styles.container}>
            <TabSelector setPageHandler={setPageHandler} page={page}></TabSelector>
            <div className={styles.taskList}> 
                {content}
            </div>
        </div>
    )
}

export default TaskList;