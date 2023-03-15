import types from '../actions/types';

let list = localStorage.getItem('noteList')

const initialState = {
    noteList: list ? JSON.parse(list) : [
            {
            id:0,
            noteTitle:'',
            tasks:[{
                id:0,
                body:'',
                isDone:false
            }]
        }
    ],
}

function reducer(state = initialState,action){
    switch(action.type){
        case types.SET_NOTELIST:
            return{
                ...state,
                noteList:action.payload
            }
        case types.ADD_TASK_TO_NOTE:
            return{
                ...state,
                noteList: state.noteList.map((note) => {
                    if(note.id !== action.payload.id){
                        return note;
                    }
                    return {
                        ...note,
                        tasks:[...note.tasks,action.payload.newTask]
                    }
                })
            }
        case types.DELETE_TASK_FROM_NOTE:
            return{
                ...state,
                noteList: state.noteList.map((note) => {
                    if(note.id !== action.payload.id){
                        return note;
                    }
                    return {
                        ...note,
                        tasks:[...note.tasks,action.payload.newTask]
                    }
                })
            }
        case types.MARK_TASK_DONE:
            return{
                ...state,
                noteList: state.noteList.map((note) => {
                    if(note.id !== action.payload.id){
                        return note;
                    }
                    return {
                        ...note,
                        tasks:[...note.tasks,action.payload.newTask]
                    }
                })
            }
        default:
            return state
    }
}

export default reducer;