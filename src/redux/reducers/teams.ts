import { CREATE_TEAM, GET_TEAMS, INVITE_MEMBERS, UPDATE_TEAM_AVATAR } from './../actionTypes/teams'

const initialState = {
    teams: [],
    pendingInvitations:[]
}

const teamsReducer = (state = initialState, action: any) => {
    console.log("teams reducer",action.type, action.payload)
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload.data.team,
            }
        case CREATE_TEAM:
            console.log("The teams data added and fetched: ",action.payload.data);
            return {
                ...state,
                teams: [...state.teams, action.payload.data.team],
            }
        case INVITE_MEMBERS:
             return {
                 ...state,
                 teams:[...state.teams , action.payload.data.team]
             }
        case UPDATE_TEAM_AVATAR:
                return {
                    // ...state,
                    // teams:[...state.teams , action.payload.data.team]
                }
        default:
            return state
    }
}

export default teamsReducer
