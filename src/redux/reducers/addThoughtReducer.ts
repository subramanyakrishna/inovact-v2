import { addThoughtConstants } from 'redux/actionTypes/addThoughtConstants'
const initialState = {
    thought: '',
}

const updateThoughtInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case addThoughtConstants.THOUGHT_UPDATE_DESCRIPTION:
            return {
                ...state,
                thought: action.payload,
            }
        case addThoughtConstants.THOUGHT_CLEAR_DATA:
            return initialState
        default:
            return state
    }
}

export { updateThoughtInfoReducer }
