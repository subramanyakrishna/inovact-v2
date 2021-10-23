import { allUserProjectConstants } from "redux/actionTypes/allUserProjectConstants";

const initialState: any = [];


const allUserProjectReducer = (state= initialState, action: any)=>{
    switch(action.type){
        case allUserProjectConstants.UPDATE_USER_PROJECTS:
            return action.payload;
        case allUserProjectConstants.CLEAR_USER_PROJECTS:
            return initialState;
        default: return state;
    }
}

export {
    allUserProjectReducer,
}