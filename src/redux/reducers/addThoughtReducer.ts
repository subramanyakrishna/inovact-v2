import { addThoughtConstants } from "redux/actionTypes/addThoughtConstants";
const initialState = {
    description: "",
}

const updateThoughtInfoReducer = (state = initialState, action: any) =>{
    switch(action.type){
        case addThoughtConstants.THOUGHT_UPDATE_DESCRIPTION: 
            return {
                ...state,
                description: action.payload,
            }
        default: return state;
    }
}

export {
    updateThoughtInfoReducer,
}