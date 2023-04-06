import React,{useState} from 'react';
import './App.css';
import TaskCreator from './Components/TaskCreator';
import './Assets/Fonts/RobotoMono-Regular.ttf'
import TaskList from './Components/TaskList';

function App() {

  const [tasks,setTasks] = useState([]);
  const [doneTasks,setDoneTasks] = useState([]);

  function newTaskHandler(task){
    setTasks(prev =>{
      return prev.concat(task);
    })
  }

  function deletedTaskHandler(id){
    setTasks(prev =>{
      const task = tasks.find(x => x.id === id);
      if(task === undefined){
        return prev;
      }
      const newTasks = tasks.filter(task => task.id !== id);
      return newTasks;
    });
  }

  function finishedTaskHandler(id){
    console.log("finished");
    setDoneTasks(prev => {
      const task = tasks.find(x => x.id === id);
      if(task === undefined){
        return prev;
      }
      const newArray = prev.concat(task);
      return newArray;
    });
    setTasks(prev =>{
      const task = tasks.find(x => x.id === id);
      if(task === undefined){
        return prev;
      }
      const newTasks = tasks.filter(task => task.id !== id);
      return newTasks;
    });
    
  }

  return (
    <div>
      <TaskCreator newTaskHandler={newTaskHandler}></TaskCreator>
      <TaskList tasks={tasks} doneTasks={doneTasks} finishedTaskHandler={finishedTaskHandler} deletedTaskHandler={deletedTaskHandler}></TaskList>
    </div>
  );
}

export default App;
