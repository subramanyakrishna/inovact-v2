import userPool from "./UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const userSignup = (email :any, password: any, userData: any) => {
    const keys = Object.keys(userData);
    const attributeList : CognitoUserAttribute[]= keys.map((ele: any)=>{
        return new CognitoUserAttribute({
            Name: ele,
            Value: userData[ele]
        })
    });
    console.log(email, password);
    console.log(attributeList);
    userPool.signUp(email, password, attributeList, [] , (err: any, data: any) => {
        if (err) {
            console.log(err);
            alert(err.message || JSON.stringify(err));
            return;
        }
        console.log(data);
      });
  };
  export default userSignup;