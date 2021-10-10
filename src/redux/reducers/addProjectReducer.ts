import { addProjectConstants } from "redux/actionTypes/addProjectConstants"

const initialState = {
    title: "",
    description: "",
    project_tags: [],
    mentions: [],
    team_id: null,
    project_status: "",
    required_roles: [],
    documents: [],
}

const updateProjectInfoReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case addProjectConstants.PROJECT_UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_PROJECT_TAGS:
            return {
                ...state,
                project_tags: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_MENTIONS:
            return {
                ...state,
                mentions: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_TEAM_ID:
            return {
                ...state,
                team_id: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_PROJECT_STATUS:
            return {
                ...state,
                project_status: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_LOOKING_FOR_ROLES:
            return {
                ...state,
                required_roles: action.payload,
            }
        case addProjectConstants.PROJECT_UPDATE_DOCUMENTS:
            return {
                ...state,
                documents: action.payload,
            }
         
        case addProjectConstants.PROJECT_CLEAR_DATA:
            return {
                ...initialState,
            }
        default: return state;
    }
}

export {
    updateProjectInfoReducer,
}