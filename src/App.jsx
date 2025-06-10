import React from 'react';
import { TaskContexts } from './TaskContext';
import './App.css'
import Item from './Item';
import Task from './Task';
function App() {
  const [taskItems , setTaskItems] = React.useState([
    {
      id : 1 ,
      title : 'Task Number 1',
      done : false
    } ,
     {
      id : 2 ,
      title : 'Task Number 2',
      done : true
    } ,
     {
      id : 3 ,
      title : 'Task Number 3',
      done : false
    } ,
     {
      id : 4 ,
      title : 'Task Number 4',
      done : false
    }
  ])
  return (
    <div className='min-h-screen bg-gray-800 flex justify-center items-center flex-col gap-10'>
    <TaskContexts.Provider value={{
      taskItems , setTaskItems
    }}>
          <Item />
          <Task />
    </TaskContexts.Provider>
     
    </div>
  );
}

export default App;