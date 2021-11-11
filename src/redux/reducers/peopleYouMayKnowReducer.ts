import { peopleYoumayKnowConstants } from 'redux/actionTypes/peopleYouMayKnowConstants'

const initialState: any = []

const peopleYouMayKnowReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case peopleYoumayKnowConstants.PYMK_UPDATE_DATA:
            return [...action.payload]
        case peopleYoumayKnowConstants.PYMK_CLEAR_DATA:
            return initialState
        default:
            return state
    }
}

export { peopleYouMayKnowReducer }
