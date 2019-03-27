import { INIT_LIST, ADD_ONE } from '../action-type/musicSheet'

export const initList = (list) => {
    return {
        type: INIT_LIST,
        payload: {
            list
        }
    }
}

export const addOne = (sheet) => {
    return {
        type: ADD_ONE,
        payload: {
            sheet
        }
    }
}