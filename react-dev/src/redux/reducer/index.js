import { combineReducers } from 'redux'
import count from './counter.js'
import list from './list.js'
import login from './login'
import musicSheet from './musicSheet'

const rootReducer = combineReducers({
    count,
    list,
    login,
    musicSheet
})

export default rootReducer