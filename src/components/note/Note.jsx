import React, { useState } from 'react'
import './Note.css';

import actions from '../../store/actions/noteActions';
import { useNavigate } from 'react-router-dom';
import Task from '../task/Task';

const Note = ({title,tasks,id}) => {
  const [confirm,setConfirm] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='note-body'>
        <h1>{title}</h1>
        <div className='note__tasks'>Tasks:{
          tasks.map((task) => (
            <Task key={task.id} noteId={id} id={task.id} text={task.body} isDone={task.isDone}/>
          ))
        }<br/></div>
        <div className='note__buttons'>
            <button className='note__button' onClick={() => navigate(`/${id}`)}>update</button>
            <button className='note__button' onClick={() => setConfirm(true)}>delete</button>
        </div>
        {
          confirm ? 
          <div className='modal'>
            <div className='modal__body'>
              do you want delete note?
              <button className='modal__btn' onClick={() => actions.deleteNote(id)}>Yes</button>
              <button className='modal__btn' onClick={() => setConfirm(false)}>No</button>
            </div>
          </div> : <></>
        }
    </div>
  )
}

export default Note