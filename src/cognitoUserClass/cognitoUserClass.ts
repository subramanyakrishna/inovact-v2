import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

class cognitoUserClass {
    static cognitouser: AmazonCognitoIdentity.CognitoUser
    static message: string = ''
    static userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: 'ap-south-1_wfLpqbssZ',
        ClientId: '8fiq0u4g3619h8bab6rmlr9k5',
    })
    static userData: {
        Username: string
        Pool: AmazonCognitoIdentity.CognitoUserPool
    }

    static upDateCognitoUserProperty(userName: string): void {
        cognitoUserClass.userData = {
            Username: userName,
            Pool: cognitoUserClass.userPool,
        }
        cognitoUserClass.cognitouser = new AmazonCognitoIdentity.CognitoUser(
            cognitoUserClass.userData
        )
    }
    static authenticate(userName: string): void {
        cognitoUserClass.upDateCognitoUserProperty(userName)
        const authenticationDetails =
            new AmazonCognitoIdentity.AuthenticationDetails(
                cognitoUserClass.userData
            )
    }
    static forgotPassword(userName: string): void {
        cognitoUserClass.upDateCognitoUserProperty(userName)

        cognitoUserClass.cognitouser.forgotPassword({
            onSuccess: (data) => {},
            onFailure: (err) => {},
        })
    }

    static async confirmPassword(
        verificationCode: string,
        newPassword: string
    ): Promise<string | void> {
        return new Promise<string | void>((resolve, rejects) => {
            cognitoUserClass.cognitouser.confirmPassword(
                verificationCode,
                newPassword,
                {
                    onFailure(err) {
                        rejects('NOT_MATCHING')

                        cognitoUserClass.message = err.name
                    },
                    onSuccess(data) {
                        cognitoUserClass.message = data

                        resolve('SUCCESS')
                    },
                }
            )
        })
            .then((res: string | void) => {
                return cognitoUserClass.message
            })
            .catch((e: any) => {
                console.log(
                    'cognitoUserClass.message out',
                    cognitoUserClass.message
                )
            })
    }
    static deleteUser(userName: string): void {
        cognitoUserClass.upDateCognitoUserProperty(userName)

        cognitoUserClass.cognitouser.deleteUser((err, result) => {})
    }
}

export default cognitoUserClass
