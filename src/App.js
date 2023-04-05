import React,{useState} from 'react';
import './App.css';
import TaskCreator from './Components/TaskCreator';
import './Assets/Fonts/RobotoMono-Regular.ttf'
import TaskList from './Components/TaskList';

function App() {

  const [tasks,setTasks] = useState([]);

  function newTaskHandler(task){
    setTasks(prev =>{
      return prev.concat(task);
    })
  }

  return (
    <div>
      <TaskCreator newTaskHandler={newTaskHandler}></TaskCreator>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
