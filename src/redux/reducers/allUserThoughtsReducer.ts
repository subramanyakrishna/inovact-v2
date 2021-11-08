import { allUserThoughtsConstants } from 'redux/actionTypes/allUserThoughtsConstants'

const initialState: any = []

const allUserThoughtsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allUserThoughtsConstants.USER_THOUGHTS_UPDATE:
            return [...action.payload]
        case allUserThoughtsConstants.USER_THOUGHTS_CLEAR:
            return initialState

        default:
            return state
    }
}
export { allUserThoughtsReducer }
