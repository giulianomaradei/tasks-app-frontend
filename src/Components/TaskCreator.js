import React,{useState} from 'react';

import styles from './TaskCreator.module.css';

function TaskCreator(props){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    function onTitleChange(event){
        setTitle(event.target.value);
    }

    function onDescriptionChange(event){
        setDescription(event.target.value);
    }

    function formSubmitHandler(event){
        event.preventDefault();
        props.newTaskHandler({title:title,description:description,key:Math.random(),id:Math.random()})
        setTitle("");
        setDescription("");
    }

    return(
        <div>
            <form className={styles.formContainer} onSubmit={formSubmitHandler}>
                <input type='text' value={title} onChange={onTitleChange} placeholder='Title *' className={`${styles.inputField} ${styles.required}`} required></input>
                <textarea type='text' value={description} onChange={onDescriptionChange} placeholder='Description' className={styles.inputField}></textarea>
                <button>Create New Task</button>
            </form>
        </div>
    )
}

export default TaskCreator;