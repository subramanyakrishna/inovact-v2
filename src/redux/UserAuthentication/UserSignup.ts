import userPool from "./UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const userSignup = ({email_id, password, user_name}: any) => {
    const attributeData = {
        Name: "email",
        Value: email_id,
    };
    const attribute = new CognitoUserAttribute(attributeData);
    
    const attributeList: any = [];
    attributeList.push(attribute);
    console.log(email_id, user_name,password);
    userPool.signUp(user_name, password, attributeList, [] , (err: any, data: any) => {
        if (err) {
            console.log(err);
            alert(err.message || JSON.stringify(err));
            return;
        }
        console.log(data);
        // console.log(data.user.storage["CognitoIdentityServiceProvider.39gv12htis5sor640kodj7os34.be627e0a-2903-4537-bee3-287ce8ddcc3c.idToken"]);

        // localStorage.setItem("user",data.user.storage["CognitoIdentityServiceProvider.39gv12htis5sor640kodj7os34.be627e0a-2903-4537-bee3-287ce8ddcc3c.idToken"]);
      });
  };
  export default userSignup;