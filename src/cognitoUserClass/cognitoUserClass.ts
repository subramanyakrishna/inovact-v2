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
                        console.log(err.name)
                        cognitoUserClass.message = err.name
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
            .catch((e: any) => {
                console.log(
                    'cognitoUserClass.message out',
                    cognitoUserClass.message
                )
                console.log(e.name)
            })
    }
    static deleteUser(userName: string): void {
        cognitoUserClass.upDateCognitoUserProperty(userName)

        cognitoUserClass.cognitouser.deleteUser((err, result) => {
            console.log('err', err)

            console.log('result', result)
        })
    }
}

export default cognitoUserClass
