import { userCredsConstants } from "redux/actionTypes/userCredsConstants";
import { userInfoConstants } from "redux/actionTypes/userInfoConstants";
import { store } from "redux/helpers/store";

const handleUserCredsChange = (name: any, value: any)=>{
    switch(name){
        case "email_id":
            store.dispatch({type: userCredsConstants.UPDATE_EMAIL_ID, payload: value});
            break;
        
        case "password": 
            store.dispatch({type: userCredsConstants.UPDATE_PASSWORD, payload: value});
            break;
    }
    console.log(store.getState());
}
const handleUserInfoChange = async (name: any, value: any)=>{
    // console.log(name, value);
    switch(name){

        case "first-name": 
            store.dispatch({type: userInfoConstants.UPDATE_FIRSTNAME, payload: value});
            break;

        case "last-name": 
            store.dispatch({type: userInfoConstants.UPDATE_LASTNAME, payload: value});
            break;

        case "bio":
            store.dispatch({type: userInfoConstants.UPDATE_BIO, payload: value});
            break;

        case "avatar":
            store.dispatch({type: userInfoConstants.UPDATE_AVATAR, payload: value});
            break;

        case "email_id":
            store.dispatch({type: userInfoConstants.UPDATE_EMAIL_ID, payload: value});
            break;

        case "role" :
            store.dispatch({type: userInfoConstants.UPDATE_ROLE, payload: value});
            break;
        
        case "designation":
            store.dispatch({type: userInfoConstants.UPDATE_DESIGNATION, payload: value});
            break;

        case "organization":
            store.dispatch({type: userInfoConstants.UPDATE_ORGANIZATION, payload: value});
            break;
        
        case "organizational_role":
            store.dispatch({type: userInfoConstants.UPDATE_ORGANIZATIONAL_ROLE, payload: value});
            break;
        
        case "university": 
            store.dispatch({type: userInfoConstants.UPDATE_UNIVERSITY, payload: value});
            break;
        
        case "graduation-year":
            store.dispatch({type: userInfoConstants.UPDATE_GRADUATION_YEAR, payload: value});
            break;

        case "journey_start_date":
            store.dispatch({type: userInfoConstants.UPDATE_JOURNEY_START_DATE, payload: value});
            break;
        
        case "years_of_professional_experience": 
            store.dispatch({type: userInfoConstants.UPDATE_YEARS_OF_PROFESSIONAL_EXPERIENCE, payload: value});
            break;
        case "degree":
            store.dispatch({type: userInfoConstants.UPDATE_DEGREE, payload: value});
            break;
        case "area-of-interest":
            store.dispatch({
                type: userInfoConstants.UPDATE_AOI,
                payload: value,
            });
            break;
    }
    // console.log(store.getState());
}

export {
    handleUserCredsChange,
    handleUserInfoChange
}