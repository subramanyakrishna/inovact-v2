import { userCredsConstants } from 'redux/actionTypes/userCredsConstants'

const initialState = {
    email_id: '',
    password: '',
    user_name: '',
}

const updateUserCreds = (state = initialState, action: any) => {
    switch (action.type) {
        case userCredsConstants.UPDATE_EMAIL_ID:
            return {
                ...state,
                email_id: action.payload,
            }

        case userCredsConstants.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload,
            }
        case userCredsConstants.UPDATE_USER_NAME:
            return {
                ...state,
                user_name: action.payload,
            }
        default:
            return state
    }
}

export { updateUserCreds }
