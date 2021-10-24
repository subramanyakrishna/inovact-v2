import { allUserIdeaConstants } from "redux/actionTypes/allUserIdeaConstants";

const initialState: any = [];


const allUserIdeaReducer = (state= initialState, action: any)=>{
    switch(action.type){
        case allUserIdeaConstants.UPDATE_USER_IDEAS:
            return action.payload;
        case allUserIdeaConstants.CLEAR_USER_IDEAS:
            return initialState;
        default: return state;
    }
}

export {
    allUserIdeaReducer,
}