import { allIdeasConstants } from "redux/actionTypes/allIdeasConstants";

const initialState: any = [];

const allIdeasReducer = (state= initialState, action: any)=>{
    switch(action.type){
        case allIdeasConstants.IDEAS_UPDATE:
            return [
                ...action.payload,
            ]
        case allIdeasConstants.IDEAS_CLEAR:
            return initialState;   
        default: return state;
    }
}

export {
    allIdeasReducer,
}