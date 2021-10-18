import { combineReducers } from 'redux'
import { authentication } from 'redux/reducers/loginReducer'
import { registration } from 'redux/reducers/registerReducer'
import { updateUserCreds } from './userCredsReducer'
import { updateUserInfo } from './userInformationReducer'
import { updateProjectInfoReducer } from './addProjectReducer'
import { updateIdeaInfoReducer } from './addIdeaReducer'
import { updateThoughtInfoReducer } from './addThoughtReducer'
import { blockedRestrictedAccounts } from './blockedAndRestrictedReducer'
import { connectionsReducer } from './connectionsReducer'
import { updateTeamWithAdminAccessReducer } from './updateTeamWithAdminAccessReducer'
import { allPostsReducer } from './allPostsReducer'
import { allIdeasReducer } from './allIdeasReducer'
import { updateTeamInfoReducer } from './updateTeamInfoReducer'
import TeamReducer from './teams'

const rootReducer = combineReducers({
    authentication: authentication,
    registration: registration,
    userInfo: updateUserInfo,
    userCreds: updateUserCreds,
    addProject: updateProjectInfoReducer,
    addIdea: updateIdeaInfoReducer,
    addThought: updateThoughtInfoReducer,
    blockedAndRestricted: blockedRestrictedAccounts,
    teamWithAdminAccess: updateTeamWithAdminAccessReducer,
    connections: connectionsReducer,
    allPosts: allPostsReducer,
    allIdeas: allIdeasReducer,
    addTeam: updateTeamInfoReducer,
    teams: TeamReducer,
})

export default rootReducer
