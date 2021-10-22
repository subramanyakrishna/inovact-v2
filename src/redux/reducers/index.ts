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
import { otherUserInfoReducer } from './otherUserInfoReducer'
import { allUserProjectReducer } from './allUserProjectReducer'
import { allUserIdeaReducer } from './allUserIdeaReducer'
// import {updateTeamInfoReducer} from './updateTeamInfoReducer'
// import { updateTeamInfoReducer } from './updateTeamInfoReducer'
import TeamReducer from './teams'
import { allThoughtsReducer } from './allThoughtsReducer'
import { allUserThoughtsReducer } from './allUserThoughtsReducer'

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
    allThoughts: allThoughtsReducer,
    otherUser: otherUserInfoReducer,
    userAllProjects: allUserProjectReducer,
    userAllIdeas: allUserIdeaReducer,
    userAllThoughts: allUserThoughtsReducer,
    // teamInfo: updateTeamInfoReducer,
    // addTeam: updateTeamInfoReducer,
    teams: TeamReducer,
})

export default rootReducer;
