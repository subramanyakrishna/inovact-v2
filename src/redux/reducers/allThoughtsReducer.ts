import { allThoughtConstants } from 'redux/actionTypes/allThoughtConstants'

const initialState: any = []

const allThoughtsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allThoughtConstants.THOUGHTS_UPDATE_ALL:
            return action.payload
        case allThoughtConstants.THOUGHT_CLEAR_ALL:
            return initialState
        default:
            return state
    }
}

export { allThoughtsReducer }
