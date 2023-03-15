import React from 'react';
import { useState } from 'react';
import actions from '../../store/actions/noteActions';

import './Form.css';

const Form = () => {
    const [noteTitle,setNoteTitle] = useState('');

  return (
    <div className='form'>
        <input 
        placeholder='write note' 
        className='form__input' 
        type="text" 
        value={noteTitle} 
        onChange={(e) => setNoteTitle(e.target.value)}/>
        <button 
        className='form__button' 
        onClick={() => actions.addNote(noteTitle)}>
        Add note
        </button>
    </div>
  )
}

export default Form