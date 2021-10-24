import { allSkillsConstants } from "redux/actionTypes/allSkillsConstants";

const initialState: any = [];

const allSkillsReducer = (state=initialState, action: any)=>{
    switch(action.type){
        case allSkillsConstants.SKILLS_UPDATE_ALL:
            return [
                ...action.payload,
            ];
        case allSkillsConstants.SKILLS_CLEAR_ALL:
            return initialState;
        
        default: return state;
    }
}

export {
    allSkillsReducer,
}