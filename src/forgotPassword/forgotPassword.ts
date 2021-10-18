import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

class cognitoUserClass {
    static cognitouser: AmazonCognitoIdentity.CognitoUser
    static userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: 'ap-south-1_wfLpqbssZ',
        ClientId: '8fiq0u4g3619h8bab6rmlr9k5',
    })
    static forgotPassword(userName: string): void {
        const userData = {
            Username: userName,
            Pool: cognitoUserClass.userPool,
        }
        cognitoUserClass.cognitouser = new AmazonCognitoIdentity.CognitoUser(
            userData
        )

        cognitoUserClass.cognitouser.forgotPassword({
            onSuccess: (data) => {
                console.log(data)
            },
            onFailure: (err) => {
                console.log('ERR:', err)
            },
        })
    }
    static confirmPassword(
        verificationCode: string,
        newPassword: string
    ): void {
        cognitoUserClass.cognitouser.confirmPassword(
            verificationCode,
            newPassword,
            {
                onFailure(err) {
                    console.log(err)
                },
                onSuccess(data) {
                    console.log(data)
                },
            }
        )
    }
}

export { cognitoUserClass }
