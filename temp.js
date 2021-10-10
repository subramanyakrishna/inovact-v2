import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: 'us-east-xxxxx', // replace by yours
    ClientId: 'xxxx', // replace by yours
})

const userData = {
    Username: username,
    Pool: this.userPool,
}

const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
cognitoUser.forgotPassword({
    onSuccess: (data) => {
        console.log(data)
    },
    onFailure: (err) => {
        console.log('ERR:', err)
    },
})
