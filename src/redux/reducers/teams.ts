import { CREATE_TEAM, GET_TEAMS } from './../actionTypes/teams'

const initialState = {
    teams: [],
}

const teamsReducer = (state = initialState, action: any) => {
    console.log("action bleh",action.type, action.payload)
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
        default:
            return state
    }
}

export default teamsReducer
