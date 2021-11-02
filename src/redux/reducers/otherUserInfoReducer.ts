import { otherUserInfoConstants } from 'redux/actionTypes/otherUserInfoConstants'

const initialState: any = {
    user_skills: [
        {
            skill: {
                id: 1,
                name: 'test skill',
            },
            level: 'beginner',
        },
        {
            skill: {
                id: 2,
                name: 'leadership',
            },
            level: 'intermediate',
        },
        {
            skill: {
                id: 3,
                name: 'communication',
            },
            level: 'advanced',
        },
    ],
}

const otherUserInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case otherUserInfoConstants.OTHER_USER_UPDATE_INFO:
            return { ...state, ...action.payload }
        case otherUserInfoConstants.OTHER_USER_CLEAR_INFO:
            return initialState
        default:
            return state
    }
}

export { otherUserInfoReducer }
