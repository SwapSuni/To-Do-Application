import React, { useState } from 'react'
import './NewTask.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../../redux/Task';

const NewTask = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch()

  // json data to be send 
  const data = {
    title: title,
    description: desc,
    target: date,
  }

  // for adding new task 
  const handleadd = () => {
    dispatch(addTask(data));
    onClose();
  }

  return (
    <div className='new-task'>
      <div className='new-cont'>
        <div className='create-form'>
          <div className='new-title'>
            <h3>CREATE A TASK</h3>
            <CancelOutlinedIcon style={{ 'font-size': '140%','cursor':'pointer' }} onClick={onClose}/>
          </div>
          <div className='new-body'>
            <div className='forum'>
              <div className='feild'>
                <label>Title : </label>
                <span><input type='text' placeholder='' className='inp' onChange={(e) => setTitle(e.target.value)}></input></span>
              </div>
              <div className='feild desc-feild'>
                <label>Description : </label>
                <span><textarea type='text' placeholder='' className='inp desc-inp' onChange={(e) => setDesc(e.target.value)}></textarea></span>
              </div>
              <div className='feild'>
                <label>Deadline Date : </label>
                <span><input type='date' placeholder='' className='inp' onChange={(e) => setDate(e.target.value)}></input></span>
              </div>
            </div>
          </div>
          <div className='new-foot'>
            <div className='button'>
              <button onClick={handleadd}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTask
