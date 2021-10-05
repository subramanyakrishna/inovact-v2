import userPool from "./UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const userSignup = (email :any, password: any) => {
    const attributeList: any = [];
    console.log(email, password);
    userPool.signUp(email, password, attributeList, [] , (err: any, data: any) => {
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