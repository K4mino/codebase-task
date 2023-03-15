import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../components/form/Form'
import Note from '../components/note/Note'


const Main = () => {
    const {noteList} = useSelector((state) => state.noteList)
    console.log(noteList)
  return (
    <div>
        <Form/>
        <div className='notes__container'>
            {noteList?.map((note) => (
                <Note key={note.id} id={note.id} title={note.title} tasks={note.tasks}/>
            ))}
        </div>
    </div>
  )
}

export default Main