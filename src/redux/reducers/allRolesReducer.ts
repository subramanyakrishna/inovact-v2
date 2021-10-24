import { allRolesConstants } from "redux/actionTypes/allRolesConstants";

const initialState:any = [];

const allRolesReducer = (state=initialState, action: any)=>{
    switch(action.type){
        case allRolesConstants.ROLES_UPDATE_ALL:
            return [
                ...action.payload,
            ];
        case allRolesConstants.ROLES_CLEAR_ALL:
            return initialState;

        default: return state;
    }

} 

export {
    allRolesReducer
}