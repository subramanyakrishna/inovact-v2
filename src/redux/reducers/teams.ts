import {
    CREATE_TEAM,
    GET_TEAMS,
    INVITE_MEMBERS,
    UPDATE_TEAM_AVATAR,
    UPDATE_TEAMS,
} from './../actionTypes/teams'

const initialState = {
    teams: [],
}

const teamsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload.data.team,
            }
        case CREATE_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload.data.team],
            }
        case INVITE_MEMBERS:
            return {
                ...state,
                teams: [...state.teams, action.payload.data.team],
            }
        case UPDATE_TEAM_AVATAR:
            return {
                // ...state,
                // teams:[...state.teams , action.payload.data.team]
            }
        case UPDATE_TEAMS:
            return {
                ...state,
                team: action.payload,
            }
        default:
            return state
    }
}

export default teamsReducer
