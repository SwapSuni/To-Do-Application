import './App.css';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import NewTask from './Components/NewTask/NewTask';
import Task from './Components/Task/Task';
import { useSelector } from 'react-redux'

function App() {

  // keeps the visibility of NewTask component in check 
  const [newVis, setNewVis] = useState(false);

  // for closing of NewTask component
  const handleclose = () => {
    setNewVis(false);
  }

  // task array from the store 
  let task= useSelector((state)=>state.tasks?.value);

  return (
    <div className='body'>
      {newVis && <NewTask onClose={handleclose} />}
      <div className='main-body'>
        <div className='header'>
          <div className='header-body'>
            <div className='title'>
              <h3 className='heading'>To-Do Board</h3>
            </div>
            <div className='profile'>
              <div className='pic'>
                <PersonIcon style={{ 'font-size': '40px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='content-body'>
            <div className='layer1'>
              <table>
                <thead>
                  <tr className='heading-row'>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Status : Complete</th>
                  </tr>
                </thead>
              </table>
              <div className='list'>
                {/* mapping the elements of task array  */}
                {task.map((item, index)=>(
                  <Task item={item}/>
                ))}
              </div>
            </div>
            <div className='layer2'>
              <div className='add-btn'>
                <button onClick={() => setNewVis(true)}>Add New Task</button>
              </div>
              <div className='quote'>
                <p>Pursue what ignites your soul,</p>
                <p>for that is where your ikigai resides,</p>
                <p>waiting to flourish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
