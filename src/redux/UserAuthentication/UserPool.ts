import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-south-1_a6B9386DG', // Your user pool id here
    ClientId: '39gv12htis5sor640kodj7os34', // Your client id here
};

export default new CognitoUserPool(poolData);