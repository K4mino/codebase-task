import React,{useState} from 'react';
import './Task.css';
import actions from '../../store/actions/noteActions';

const Task = ({noteId,id,text,isDone}) => {
  const [confirm,setConfirm] = useState(false);
  return (
    <>
    <div className='task__body'>
        <div className={isDone ? 'done':''}>{text}</div>
        <input type="checkbox" checked={isDone ? true : false} onChange={() => actions.taskIsDone(noteId,id)}/>
        <button onClick={() =>setConfirm(true)}>delete task</button>
    </div>
    {
          confirm ? 
          <div className='modal'>
            <div className="modal__body">
              do you want delete task?
              <button  className='modal__btn' onClick={() => actions.deleteTask(id,noteId)}>Yes</button>
              <button  className='modal__btn' onClick={() => setConfirm(false)}>No</button>
            </div>
          </div> : <></>
        }
    </>
  )
}

export default Task