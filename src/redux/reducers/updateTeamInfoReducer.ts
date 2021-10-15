import { addTeamConstants } from "redux/actionTypes/addTeamConstants"

const initialState = {
    name: "", 
    looking_for_members:false,
    looking_for_mentor:false,
    tags: [1, 2, 3],
    roles:[1],
    members:null,
}

const updateTeamInfoReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case addTeamConstants.TEAM_UPDATE_TITLE:
            return {
                ...state,
                name: action.payload,
            }
        case addTeamConstants.TEAM_UPDATE_LOOKING_FOR_MEMBERS:
            return {
                ...state,
                looking_for_members: action.payload,
            }
        case addTeamConstants.TEAM_UPDATE_LOOKING_FOR_MENTOR:
            return {
                ...state,
                looking_for_mentor: action.payload,
            }
        case addTeamConstants.TEAM_UPDATE_TEAM_TAGS:
            return {
                ...state,
                tags: action.payload,
            }
        case addTeamConstants.TEAM_UPDATE_MEMBERS:
            return {
                ...state,
                members: action.payload,
            }
        case addTeamConstants.TEAM_CLEAR_DATA:
            return initialState;
            
        default: return state;
    }
}

export {
    updateTeamInfoReducer,
}