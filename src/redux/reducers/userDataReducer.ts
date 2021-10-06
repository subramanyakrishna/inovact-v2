import userDataConstants from "redux/actionTypes/userDataConstants";

const inititalState = {
    admin: false,
    avatar: "",
    bio: "",
    cognito_sub: "",
    created_at: "",
    designation: "",
    email_id: "",
    first_name: "",
    graduation_year: "",
    id: 0,
    journey_start_date: null,
    last_name: "",
    organization: "",
    organizational_role: "",
    phone_number: "",
    profile_complete: null,
    role: "",
    university: "",
    updated_at: "",
    user_name: "",
    years_of_professional_experience: null,
}

const updateUserData = (state = inititalState, action: any)=>{
    switch(action.type){
        case userDataConstants.UPDATE_USER_INFO: 
        return {
            ...action.data,
        }

        case userDataConstants.DELETE_USER_INFO:
            return {
                ...inititalState,
            }    
        default: return state;
    }
    // console.log(state);
}

export {
    updateUserData
}