import { ADD_ONE, INIT_LIST } from '../action-type/musicSheet'
import { setLocalItem } from '../local'
const initState = {
    list: []
}

const musicSheetReducer = (state = initState, action) => {
    let list
    switch(action.type) {
        case ADD_ONE:
            list = [...state.list, action.payload.sheet]
            setLocalItem('musicSheet', JSON.stringify(list))
            return {
                ...state,
                list
            }
        case INIT_LIST:
            return {
                ...state,
                list: action.payload.list
            }
        default:
            return state
    }
}

export default musicSheetReducer