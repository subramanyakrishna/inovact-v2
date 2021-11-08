import { allPostsConstants } from 'redux/actionTypes/allPostsConstants'

const initialState: any = []

const allPostsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allPostsConstants.POSTS_UPDATE:
            return action.payload

        case allPostsConstants.POSTS_CLEAR:
            return [...initialState]
        default:
            return state
    }
}

export { allPostsReducer }
