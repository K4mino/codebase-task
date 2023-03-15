import {configureStore} from '@reduxjs/toolkit';
import state from './reducers/noteReducer';
import reduxThunk from 'redux-thunk';

const store = configureStore({
    reducer:{
        noteList:state
    },
    middleware:[reduxThunk]
})

export default store;