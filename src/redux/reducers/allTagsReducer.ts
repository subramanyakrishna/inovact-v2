import { allTagsConstants } from 'redux/actionTypes/allTagsConstants'

const initialState: any = []

const allTagsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allTagsConstants.TAGS_UPDATE_ALL:
            return [...action.payload]
        case allTagsConstants.TAGS_CLEAR_ALL:
            return [...initialState]
        default:
            return state
    }
}

export { allTagsReducer }
