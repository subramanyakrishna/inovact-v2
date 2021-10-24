import { blockedAndRestricted } from 'redux/actionTypes/blockedAndRestrictedConstants'

function updateBlockedUser(blocked_user: any) {
    return { type: blockedAndRestricted.BLOCKED_USERS, payload: blocked_user }
}

function updateRestrictedUser(restricted_user: any) {
    return {
        type: blockedAndRestricted.RESTRICTED_USERS,
        payload: restricted_user,
    }
}

export { updateBlockedUser, updateRestrictedUser }
