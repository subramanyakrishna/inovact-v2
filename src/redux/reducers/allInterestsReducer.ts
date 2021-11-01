import { allInterestsConstants } from "redux/actionTypes/allInterestsConstants";

const initialState: any = [];

const allInterestsReducer = (state=initialState, action: any)=>{
    switch(action.type){
        case allInterestsConstants.INTEREST_UPDATE_ALL:
            return [
                ...action.payload,
            ]
        case allInterestsConstants.INTEREST_CLEAR_ALL:
            return initialState;
        default: return state;
    }
}

export {
    allInterestsReducer,
}