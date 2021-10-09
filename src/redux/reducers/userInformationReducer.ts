import { AreaOfInterstI, UserI } from "interfaces";
import { userInfoConstants } from "redux/actionTypes/userInfoConstants";


const initialState = {
    first_name: "",
    last_name: "",
    user_name: "",
    bio: "",
    avatar: "",
    email_id: "",
    role: "student",
    designation: "",
    organization: "",
    organizational_role: "",
    university: "",
    graduation_year: new Date(),
    journey_start_date: new Date(),
    years_of_professional_experience: 0,
    degree: "",
    area_of_interests: [],
    profile_complete: false,
    id: 0,
    cognito_sub: "",
    appearance: 0,
    percentage_growth: 0,
    website: "",
    skills: [],
    projects: [],
    ideas: [],
    thoughts: [],
    is_public: false,
    blocked_users: [],
    restricted_users: []
}



const updateUserInfo = (state = initialState, action: any)=>{
    switch(action.type){
        case userInfoConstants.UPDATE_FIRSTNAME:
        return {
            ...state,
            first_name: action.payload,
        }   
        case userInfoConstants.UPDATE_LASTNAME:
        return {
            ...state,
            last_name: action.payload,
        }   
        case userInfoConstants.UPDATE_BIO:
        return {
            ...state,
            bio: action.payload,
        }   
        case userInfoConstants.UPDATE_AVATAR:
        return {
            ...state,
            avatar: action.payload,
        }   
        case userInfoConstants.UPDATE_EMAIL_ID:
        return {
            ...state,
            email_id: action.payload,
        }   
        case userInfoConstants.UPDATE_ROLE:
        return {
            ...state,
            role: action.payload,
        }   
        case userInfoConstants.UPDATE_DESIGNATION:
        return {
            ...state,
            designation: action.payload,
        }   
        case userInfoConstants.UPDATE_ORGANIZATION:
        return {
            ...state,
            organization: action.payload,
        }   
        case userInfoConstants.UPDATE_ORGANIZATIONAL_ROLE:
        return {
            ...state,
            organizational_role: action.payload,
        }   
        case userInfoConstants.UPDATE_UNIVERSITY:
        return {
            ...state,
            university: action.payload,
        }   
        case userInfoConstants.UPDATE_GRADUATION_YEAR:
        return {
            ...state,
            graduation_year: action.payload,
        }   
        case userInfoConstants.UPDATE_JOURNEY_START_DATE:
        return {
            ...state,
            journey_start_date: action.payload,
        }   
        case userInfoConstants.UPDATE_YEARS_OF_PROFESSIONAL_EXPERIENCE:
        return {
            ...state,
            years_of_professional_experience: action.payload,
        }   
        case userInfoConstants.UPDATE_DEGREE:
        return {
            ...state,
            degree: action.payload,
        }  
        
        case userInfoConstants.UPDATE_AOI:
            return {
                ...state,
                area_of_interests: action.payload,
            }

        case userInfoConstants.UPDATE_PROFILE_COMPLETE:
            return{
                ...state,
                profile_complete: true,
            }
        case userInfoConstants.UPDATE_USER_NAME: 
            return{
                ...state,
                user_name: action.payload,
            }    
        case userInfoConstants.UPDATE_WEBSITE: 
            return{
                ...state,
                website: action.payload,
            } 
        case userInfoConstants.UPDATE_RESTRICTED_USERS: 
            return{
                ...state,
                restricted_users: action.payload,
            }    
        case userInfoConstants.UPDATE_BLOCKED_USERS: 
            return{
                ...state,
                blocked_users: action.payload,
            }    
        case userInfoConstants.UPDATE_SKILLS: 
            return{
                ...state,
                skills: action.payload,
            } 
        case userInfoConstants.UPDATE_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            }      
        case userInfoConstants.UPDATE_IDEAS: 
            return{
                ...state,
                ideas: action.payload,
            }   
        case userInfoConstants.UPDATE_THOUGHTS: 
            return{
                ...state,
                thoughts: action.payload,
            }       
        case userInfoConstants.UPDATE_IS_PUBLIC: 
            return{
                ...state,
                is_public: action.payload,
            }     
        case userInfoConstants.UPDATE_COMPLETE_PROFILE:
            return{
                ...state,
                ...action.data,
            }    
        default : return state;
    }
}

export {
    updateUserInfo,
};