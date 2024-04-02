import React from 'react'
import './Task.css'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../redux/Task'
import { completeTask } from '../../redux/Task'

const Task = (props) => {
  let { item } = props;
  const taskId= item?.id;
  const dispatch= useDispatch();

  // to delete a task of a id 
  const handledel=()=>{
    // console.log(taskId)
    dispatch(deleteTask(taskId));
  }

  // to mark the task as complete 
  const handleCompl=()=>{
    dispatch(completeTask(taskId));
  }

  return (
    <div className='row'>
      <div className='ele'><h4>{item?.title}</h4></div>
      <div className='ele'><p >{item?.description}.</p></div>
      <div className='ele'><p>{item?.Deadline}</p></div>
      <div className='ele'><input type='checkbox' onClick={handleCompl}></input></div>
      <div className='ele'><button className='del-btn' onClick={handledel}>Delete</button></div>
    </div>
  )
}

export default Task
