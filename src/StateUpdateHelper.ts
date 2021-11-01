import { userCredsConstants } from 'redux/actionTypes/userCredsConstants'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'
import { store } from 'redux/helpers/store'
import { addIdeaConstants } from 'redux/actionTypes/addIdeaConstants'
import { addTeamConstants } from 'redux/actionTypes/addTeamConstants'
import { addProjectConstants } from 'redux/actionTypes/addProjectConstants'
import { addThoughtConstants } from 'redux/actionTypes/addThoughtConstants'
import { allPostsConstants } from 'redux/actionTypes/allPostsConstants'
import { allIdeasConstants } from 'redux/actionTypes/allIdeasConstants'
import { otherUserInfoConstants } from 'redux/actionTypes/otherUserInfoConstants'
import { allUserIdeaConstants } from 'redux/actionTypes/allUserIdeaConstants'
import { allUserProjectConstants } from 'redux/actionTypes/allUserProjectConstants'
import { allThoughtConstants } from 'redux/actionTypes/allThoughtConstants'
import { allUserThoughtsConstants } from 'redux/actionTypes/allUserThoughtsConstants'
import { allTagsConstants } from 'redux/actionTypes/allTagsConstants'
import { allSkillsConstants } from 'redux/actionTypes/allSkillsConstants'
import { allRolesConstants } from 'redux/actionTypes/allRolesConstants'
import { peopleYoumayKnowConstants } from 'redux/actionTypes/peopleYouMayKnowConstants'
import { otherUserTeamsConstants } from 'redux/actionTypes/otherUserTeamsConstants'
import { allInterestsConstants } from 'redux/actionTypes/allInterestsConstants'
import { otherUserConnectionsConstants } from 'redux/actionTypes/otherUserConnections'

const handleUserCredsChange = (name: any, value: any) => {
    console.log('all posts value: ', value)
    switch (name) {
        case 'email_id':
            store.dispatch({
                type: userCredsConstants.UPDATE_EMAIL_ID,
                payload: value,
            })
            break
        case 'password':
            store.dispatch({
                type: userCredsConstants.UPDATE_PASSWORD,
                payload: value,
            })
            break
        case 'user-name':
            store.dispatch({
                type: userCredsConstants.UPDATE_USER_NAME,
                payload: value,
            })
            break
    }
    console.log(store.getState())
}
const handleUserInfoChange = async (name: any, value: any) => {
    console.log(name, value)
    switch (name) {
        case 'profile_completed':
            store.dispatch({
                type: userInfoConstants.UPDATE_PROFILE_COMPLETE,
            })
            break
        case 'first-name':
            store.dispatch({
                type: userInfoConstants.UPDATE_FIRSTNAME,
                payload: value,
            })
            break
        case 'last-name':
            store.dispatch({
                type: userInfoConstants.UPDATE_LASTNAME,
                payload: value,
            })
            break

        case 'bio':
            store.dispatch({
                type: userInfoConstants.UPDATE_BIO,
                payload: value,
            })
            break

        case 'avatar':
            store.dispatch({
                type: userInfoConstants.UPDATE_AVATAR,
                payload: value,
            })
            break

        case 'email_id':
            store.dispatch({
                type: userInfoConstants.UPDATE_EMAIL_ID,
                payload: value,
            })
            break

        case 'role':
            store.dispatch({
                type: userInfoConstants.UPDATE_ROLE,
                payload: value,
            })
            break

        case 'designation':
            store.dispatch({
                type: userInfoConstants.UPDATE_DESIGNATION,
                payload: value,
            })
            break

        case 'organization':
            store.dispatch({
                type: userInfoConstants.UPDATE_ORGANIZATION,
                payload: value,
            })
            break

        case 'organizational_role':
            store.dispatch({
                type: userInfoConstants.UPDATE_ORGANIZATIONAL_ROLE,
                payload: value,
            })
            break

        case 'university':
            store.dispatch({
                type: userInfoConstants.UPDATE_UNIVERSITY,
                payload: value,
            })
            break

        case 'graduation-year':
            store.dispatch({
                type: userInfoConstants.UPDATE_GRADUATION_YEAR,
                payload: new Date(value).toISOString(),
            })
            break

        case 'journey_start_date':
            store.dispatch({
                type: userInfoConstants.UPDATE_JOURNEY_START_DATE,
                payload: new Date(value).toISOString(),
            })
            break

        case 'years_of_professional_experience':
            store.dispatch({
                type: userInfoConstants.UPDATE_YEARS_OF_PROFESSIONAL_EXPERIENCE,
                payload: value,
            })
            break
        case 'degree':
            store.dispatch({
                type: userInfoConstants.UPDATE_DEGREE,
                payload: value,
            })
            break
        case "website":
            store.dispatch({
                type: userInfoConstants.UPDATE_USER_WEBSITE,
                payload: value,
            });
            break;
        case 'area-of-interest':
            store.dispatch({
                type: userInfoConstants.UPDATE_AOI,
                payload: value,
            })
            break
        case 'is_public':
            store.dispatch({
                type: userInfoConstants.UPDATE_IS_PUBLIC,
                payload: value,
            })
            break
        case 'blocked_users':
            store.dispatch({
                type: userInfoConstants.UPDATE_BLOCKED_USERS,
                payload: value,
            })
            break
        case 'restricted_users':
            store.dispatch({
                type: userInfoConstants.UPDATE_RESTRICTED_USERS,
                payload: value,
            })
            break
        case 'team_with_admin_access':
            store.dispatch({
                type: userInfoConstants.UPDATE_TEAM_WITH_ADMIN_ACCESS_IDS,
                payload: value,
            })
            break
        case 'team_public_visibility':
            store.dispatch({
                type: userInfoConstants.UPDATE_TEAM_PUBLIC_VISIBILITY,
                payload: value,
            })
            break
        case 'update_complete_user':
            store.dispatch({
                type: userInfoConstants.UPDATE_WHOLE_PROFILE,
                payload: value,
            })
    }
    console.log(store.getState())
}

const handleAddProjectChange = (name: any, value: any) => {
    switch (name) {
        case 'user_id':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_USER_ID,
                payload: value,
            })
            break
        case 'title':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_TITLE,
                payload: value,
            })
            break
        case 'description':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_DESCRIPTION,
                payload: value,
            })
            break
        case 'project_tags':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_PROJECT_TAGS,
                payload: value,
            })
            break
        case 'mentions':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_MENTIONS,
                payload: value,
            })
            break
        case 'team_id':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_TEAM_ID,
                payload: value,
            })
            break
        case 'project_status':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_PROJECT_STATUS,
                payload: value,
            })
            break
        case 'looking_for_roles':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_LOOKING_FOR_ROLES,
                payload: value,
            })
            break
        case "looking_for_members":
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_LOOKING_FOR_MEMBERS,
                payload: value,
            });
            break;
        case "looking_for_mentor":
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_LOOKING_FOR_MENTOR,
                payload: value,
            })
            break;
        case 'documents':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_DOCUMENTS,
                payload: value,
            })
            break
        case 'project_clear_data':
            store.dispatch({ type: addProjectConstants.PROJECT_CLEAR_DATA })
            break
        case 'project_add_data':
            store.dispatch({
                type: addProjectConstants.PROJECT_UPDATE_ALL_DATA,
                payload: value,
            })
    }
    console.log(store.getState())
}

const handleAddIdeaChange = (name: any, value: any) => {
    switch (name) {
        case 'title':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_TITLE,
                payload: value,
            })
            break
        case 'description':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_DESCRIPTION,
                payload: value,
            })
            break
        case 'documents':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_DOCUMENTS,
                payload: value,
            })
            break
        case "team_id":
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_TEAM_ID,
                payload: value,
            })
            break;
        case 'idea_tags':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_IDEA_TAGS,
                payload: value,
            })
            break
        case 'looking_for_team':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_LOOKING_FOR_TEAM,
                payload: value,
            })
            break
        case 'looking_for_mentor':
            store.dispatch({
                type: addIdeaConstants.IDEA_UPDATE_LOOKING_FOR_MENTOR,
                payload: value,
            })
            break
        case 'idea_clear_data':
            store.dispatch({
                type: addIdeaConstants.IDEA_CLEAR_DATA,
            })
            break
    }
    console.log(store.getState())
}

const handleAddThoughtChange = (name: any, value: any) => {
    switch (name) {
        case 'description':
            store.dispatch({
                type: addThoughtConstants.THOUGHT_UPDATE_DESCRIPTION,
                payload: value,
            })
            break
        case 'thought_clear_data':
            store.dispatch({
                type: addThoughtConstants.THOUGHT_CLEAR_DATA,
            })
            break
    }
    console.log(store.getState())
}

const handleAddTeamChange = (name: any, value: any) => {
    switch (name) {
        case 'name':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_TITLE,
                payload: value,
            })
            break

        case 'tags':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_TEAM_TAGS,
                payload: value,
            })
            break
        case 'looking_for_members':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_LOOKING_FOR_MEMBERS,
                payload: value,
            })
            break
        case 'looking_for_mentor':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_LOOKING_FOR_MENTOR,
                payload: value,
            })
            break
        case "team_avatar":
            // store.dispatch({
            //     type: addTeam
            // })
            break;
        case 'roles':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_ROLE,
                payload: value,
            })
            break
        case 'members':
            store.dispatch({
                type: addTeamConstants.TEAM_UPDATE_MEMBERS,
                payload: value,
            })
            break
        case 'team_clear_data':
            store.dispatch({ type: addTeamConstants.TEAM_CLEAR_DATA })
            break
    }
    console.log(store.getState())
}

const handleAllPosts = (name: any, value: any) => {
    console.log('all posts value: ', value)
    switch (name) {
        case 'all-posts':
            store.dispatch({
                type: allPostsConstants.POSTS_UPDATE,
                payload: value,
            })
            break
        case 'clear-posts':
            store.dispatch({
                type: allPostsConstants.POSTS_CLEAR,
                payload: value,
            })
            break
    }
    console.log(store.getState())
}
const handleAllIdeas = (name: any, value: any) => {
    console.log('all posts value: ', value)
    switch (name) {
        case 'all-ideas':
            store.dispatch({
                type: allIdeasConstants.IDEAS_UPDATE,
                payload: value,
            })
            break
        case 'clear-ideas':
            store.dispatch({
                type: allIdeasConstants.IDEAS_CLEAR,
                payload: value,
            })
            break
    }
    console.log(store.getState())
}

const handleOtherUserInfoChange = (name: any, value: any) => {
    switch (name) {
        case 'other-user-update':
            store.dispatch({
                type: otherUserInfoConstants.OTHER_USER_UPDATE_INFO,
                payload: value,
            })
            break
        case 'clear-other-user':
            store.dispatch({
                type: otherUserInfoConstants.OTHER_USER_CLEAR_INFO,
            })
    }
    console.log(store.getState())
}

const handleAllUserIdeas = (name: any, value: any) => {
    switch (name) {
        case 'all-user-ideas':
            store.dispatch({
                type: allUserIdeaConstants.UPDATE_USER_IDEAS,
                payload: value,
            })
            break
        case 'clear-all-user-ideas':
            store.dispatch({
                type: allUserIdeaConstants.CLEAR_USER_IDEAS,
            })
            break
    }
    console.log(store.getState())
}
const handleAllUserProject = (name: any, value: any) => {
    switch (name) {
        case 'all-user-projects':
            store.dispatch({
                type: allUserProjectConstants.UPDATE_USER_PROJECTS,
                payload: value,
            })
            break
        case 'clear-all-user-projects':
            store.dispatch({
                type: allUserProjectConstants.CLEAR_USER_PROJECTS,
            })
            break
    }
    console.log(store.getState())
}
const handleAllThoughts = (name: any, value: any) => {
    switch (name) {
        case 'all-thoughts':
            store.dispatch({
                type: allThoughtConstants.THOUGHTS_UPDATE_ALL,
                payload: value,
            })
            break
        case 'clear-all-thoughts':
            store.dispatch({
                type: allThoughtConstants.THOUGHT_CLEAR_ALL,
            })
            break
    }
    console.log(store.getState())
}
const handleAllUserThoughts = (name: any, value: any) => {
    switch (name) {
        case 'all-user-thoughts':
            store.dispatch({
                type: allUserThoughtsConstants.USER_THOUGHTS_UPDATE,
                payload: value,
            })
            break
        case 'all-user-thoughts-clear':
            store.dispatch({
                type: allUserThoughtsConstants.USER_THOUGHTS_CLEAR,
            })
            break
    }
    console.log(store.getState())
}

const handleTagsChange = (name: any, value: any) => {
    console.log(name, value)
    switch (name) {
        case 'udpate_all_tags':
            store.dispatch({
                type: allTagsConstants.TAGS_UPDATE_ALL,
                payload: value,
            })
            break
        case 'clear_all_tags':
            store.dispatch({
                type: allTagsConstants.TAGS_UPDATE_ALL,
                payload: value,
            })
            break
    }
    console.log('The tags are updated: ', store.getState())
}
const handleSkillsChange = (name: any, value: any) => {
    console.log(name, value)
    switch (name) {
        case 'udpate_all_skills':
            store.dispatch({
                type: allSkillsConstants.SKILLS_UPDATE_ALL,
                payload: value,
            })
            break
        case 'clear_all_skills':
            store.dispatch({
                type: allSkillsConstants.SKILLS_UPDATE_ALL,
                payload: value,
            })
            break
    }
    console.log('The tags are updated: ', store.getState())
}
const handleRolesChange = (name: any, value: any) => {
    console.log(name, value)
    switch (name) {
        case 'udpate_all_roles':
            store.dispatch({
                type: allRolesConstants.ROLES_UPDATE_ALL,
                payload: value,
            })
            break
        case 'clear_all_roles':
            store.dispatch({
                type: allRolesConstants.ROLES_UPDATE_ALL,
                payload: value,
            })
            break
    }
    console.log('The tags are updated: ', store.getState())
}
const handlePeopleYouMayKnow = (name: any, value: any) => {
    switch (name) {
        case 'pymk_update_all':
            store.dispatch({
                type: peopleYoumayKnowConstants.PYMK_UPDATE_DATA,
                payload: value,
            })
            break
        case 'pymk_clear_all':
            store.dispatch({
                type: peopleYoumayKnowConstants.PYMK_CLEAR_DATA,
                payload: value,
            })
            break
    }
    console.log('people you may know: ', store.getState())
}

const handleOtherUserTeams = (name: any, value: any)=>{
    switch(name){
        case "other_user_teams_all":
            store.dispatch({
                type: otherUserTeamsConstants.OTHER_USER_TEAMS_UPDATE_ALL,
                payload: value,
            });
            break;
        case "other_user_teams_clear_all":
            store.dispatch({
                type: otherUserTeamsConstants.OTHER_USER_TEAMS_CLEAR_ALL,
                payload: value,
            });
            break;
    }
    console.log(store.getState());
}
const handleInterestsChange = (name: any, value: any)=>{
    switch(name){
        case "interests_update":
            store.dispatch({
                type: allInterestsConstants.INTEREST_UPDATE_ALL,
                payload: value,
            });
            break;
        case "interests_clear":
            store.dispatch({
                type: allInterestsConstants.INTEREST_CLEAR_ALL,
                payload: value,
            });
            break;
    }
    console.log("All the interests are updated",store.getState());
}
const handleOtherUserConnections = (name: any, value: any)=>{
    switch(name){
        case "other-connections-all":
            store.dispatch({
                type: otherUserConnectionsConstants.OTHER_USER_CONNECTIONS_ALL,
                payload: value,
            });
            break;
        case "other-connections-clear":
            store.dispatch({
                type: otherUserConnectionsConstants.OTHER_USER_CONNECTIONS_CLEAR,
                payload: value,
            });
            break;
    }
    console.log(store.getState());
}
export {
    handleUserCredsChange,
    handleUserInfoChange,
    handleAddProjectChange,
    handleAddIdeaChange,
    handleAddThoughtChange,
    handleAddTeamChange,
    handleAllPosts,
    handleAllIdeas,
    handleOtherUserInfoChange,
    handleAllUserIdeas,
    handleAllUserProject,
    handleAllThoughts,
    handleAllUserThoughts,
    handleTagsChange,
    handleSkillsChange,
    handleRolesChange,
    handlePeopleYouMayKnow,
    handleOtherUserTeams,
    handleInterestsChange,
    handleOtherUserConnections,
}
