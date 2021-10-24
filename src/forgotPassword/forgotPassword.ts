import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

class cognitoUserClass {
    static cognitouser: AmazonCognitoIdentity.CognitoUser
    static message: string = ''
    static userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: 'ap-south-1_wfLpqbssZ',
        ClientId: '8fiq0u4g3619h8bab6rmlr9k5',
    })
    static forgotPassword(userName: string): void {
        console.log(cognitoUserClass.userPool)
        const userData = {
            Username: userName,
            Pool: cognitoUserClass.userPool,
        }
        cognitoUserClass.cognitouser = new AmazonCognitoIdentity.CognitoUser(
            userData
        )
        console.log(cognitoUserClass.cognitouser)
        cognitoUserClass.cognitouser.forgotPassword({
            onSuccess: (data) => {
                console.log(data)
            },
            onFailure: (err) => {
                console.log('ERR:', err)
            },
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
                    },
                    onSuccess(data) {
                        cognitoUserClass.message = data
                        console.log(
                            'cognitoUserClass.message in ',
                            cognitoUserClass.message
                        )
                        resolve('SUCCESS')
                    },
                }
            )
        })
            .then((res: string | void) => {
                console.log(res)
                console.log(
                    'cognitoUserClass.message out',
                    cognitoUserClass.message
                )
                return cognitoUserClass.message
            })
            .catch((e: any) => {})
    }
}

export default cognitoUserClass
