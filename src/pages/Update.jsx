import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import actions from '../store/actions/noteActions'
import Task from '../components/task/Task'

const Update = () => {
    const navigate = useNavigate();
    const {noteList} = useSelector((state) => state.noteList)
    const {id} = useParams();//с помощью хука useParams получаем параметры для определения какую заметку мы открыли
    const [body,setBody] = useState('');
  return (
    <div className='update__page'>
        <button onClick={() => navigate(-1)} className='back-btn'>Go back</button>
        <div className='update__note'>
            <h2>{noteList[id].title}</h2>
            {
                noteList[id].tasks.map((task) => (
                    <Task key={task.id} noteId={id} id={task.id} text={task.body} isDone={task.isDone}/>
                ))
            }
            <div className="update__form">
                <input type="text" placeholder='write task' onChange={(e) => setBody(e.target.value)}/>
                <button onClick={() => {actions.addTask(id,body);setBody('')}}>add tasks</button>
            </div>
        </div>
    </div>
  ) 
}

export default Update