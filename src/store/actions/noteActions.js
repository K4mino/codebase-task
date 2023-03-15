import store from '../store';
import types from './types';

//Функиця для добавления заметки, сперва получаем массив из store 
//обновляем копию массива и сохраняем его в localdtorage и передаем в payload новый массив
const addNote = (noteTitle) => {
    const {noteList} = store.getState().noteList;
    if(noteTitle == ''){
        return alert('Empty input')
    }
    let newList = [...noteList,{id:noteList.length,title:noteTitle,tasks:[]}] 
    localStorage.setItem('noteList',JSON.stringify(newList))
    store.dispatch({
        type:types.SET_NOTELIST,
        payload:newList
    })

}

//для добавления задачи получаем id заметки и текст задачи и по id обновляем массив задач
const addTask = (noteId,body) => {
    const {noteList} = store.getState().noteList;
    if(body == ''){
        return alert('Empty input')
    }
    let newNotes = [...noteList]
    let newTask = {
        id:new Date(),
        body:body,
        isDone:false
    }
    newNotes[noteId].tasks.push(newTask)
    localStorage.setItem('noteList',JSON.stringify(newNotes))
    store.dispatch({
        type:types.ADD_TASK_TO_NOTE,
        payload:newNotes
    })
}

//для удаленя также получаем id заметки и id задачи и удаляем через метод filter
const deleteTask = (taskid,noteId) => {
    const {noteList}= store.getState().noteList;
    let newNotes = [...noteList]
    let newTasks = newNotes[noteId].tasks.filter((task) => task.id !== taskid)
    newNotes[noteId].tasks = newTasks;
    localStorage.setItem('noteList',JSON.stringify(newNotes))
    store.dispatch({
        type:types.DELETE_TASK_FROM_NOTE,
        payload:newNotes
    })
}
//для обновления задачи получаем id заметки которую обновляем и id задачи и через метод map обновляем поле isDone
const taskIsDone = (noteId,taskId) => {
    console.log(noteId,taskId)
    const {noteList}= store.getState().noteList;
    let newNotes = [...noteList]
    let newTasks = newNotes[noteId].tasks.map((task) => {
        if(task.id === taskId){
            task.isDone = !task.isDone
        }
        return task
    })
    newNotes[noteId].tasks = newTasks;
    localStorage.setItem('noteList',JSON.stringify(newNotes))
    store.dispatch({
        type:types.MARK_TASK_DONE,
        payload:newNotes
    })
}

// для удаления получаем id заметки и через метод filter 
//получаем новый массив без определенной заметки также обновляем localdtorage и store
const deleteNote = (id) => {
    const {noteList} = store.getState().noteList;
    let newList = [...noteList].filter((note) => note.id !== id)

    localStorage.setItem('noteList',JSON.stringify(newList))
    store.dispatch({
        type:types.SET_NOTELIST,
        payload:newList
    })
}

const actions = {
    addNote,
    deleteNote,
    addTask,
    deleteTask,
    taskIsDone
}

export default actions;