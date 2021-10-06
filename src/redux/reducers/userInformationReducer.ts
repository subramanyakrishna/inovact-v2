import { userInfoConstants } from "redux/actionTypes/userInfoConstants";
const stateType = {
    
}
const initialState = {
    first_name: "",
    last_name: "",
    bio: "",
    avatar: "",
    email_id: "",
    role: "Student",
    designation: "",
    organization: "",
    organizational_role: "",
    university:"",
    graduation_year: "",
    journey_start_date: "",
    years_of_professional_experience: "",
    degree: "",
    area_of_interests: [],
    profile_complete: false,
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
        default : return state;
    }
}

export {
    updateUserInfo,
};