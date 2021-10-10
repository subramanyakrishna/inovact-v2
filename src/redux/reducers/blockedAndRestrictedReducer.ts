import { blockedAndRestricted } from '../actionTypes/blockedAndRestrictedConstants'

const initialState = {
    blocked_users: [],
    restricted_users: [],
}

export function blockedRestrictedAccounts(state = initialState, action: any) {
    switch (action.type) {
        case blockedAndRestricted.BLOCKED_USERS:
            return {
                ...state,
                blocked_users: action.payload,
            }
        case blockedAndRestricted.RESTRICTED_USERS:
            return {
                ...state,
                restricted_users: action.payload,
            }

        default:
            return state
    }
}
