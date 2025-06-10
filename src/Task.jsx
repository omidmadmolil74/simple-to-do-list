import React from 'react'
import { TaskContexts } from './TaskContext'
import { FaTrash } from "react-icons/fa";
import { BsXSquareFill } from "react-icons/bs";
import { BsCheckSquareFill } from "react-icons/bs";




const Task = () => {
    const {taskItems , setTaskItems} = React.useContext(TaskContexts)
    function handleDelete(id){
       const newTasks =  taskItems.filter(t => t.id !== id )
       setTaskItems(newTasks)
    }
    function handleDoUndo(id){
      const index = taskItems.findIndex(t => t.id === id)
      const tasklocal = [...taskItems]
      tasklocal[index].done = !tasklocal[index].done
      setTaskItems([...tasklocal])
    }
    console.log(
      taskItems
    );
    if(taskItems.length === 0){
      return (
        <h1 className='text-5xl text-amber-50'>There is no Task</h1>
      )
    }
  return (
    <div className='text-white'>
        <ul className='space-y-5'>
            {taskItems.map(t=> (
                <li key={t.id} id={t.id} className={`w-200 py-5 px-5 text-2xl flex justify-between ${t.done ? 'bg-amber-700' : 'bg-blue-900'}`}>
                    <h1>{t.title}</h1>
                    <div className='flex gap-5 items-center'>
                      <FaTrash onClick={()=> handleDelete(t.id)} />
                      {t.done ? <BsXSquareFill onClick={()=> handleDoUndo(t.id)} /> : <BsCheckSquareFill onClick={()=> handleDoUndo(t.id)} /> }
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Task