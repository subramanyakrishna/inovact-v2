import { otherUserInfoConstants } from "redux/actionTypes/otherUserInfoConstants";

const initialState: any = {};

const otherUserInfoReducer = (state= initialState, action: any)=>{
    switch(action.type){
        case otherUserInfoConstants.OTHER_USER_UPDATE_INFO:
            return action.payload;
        case otherUserInfoConstants.OTHER_USER_CLEAR_INFO:
            return initialState;
        default: return state;    
    }
}

export {
    otherUserInfoReducer
}