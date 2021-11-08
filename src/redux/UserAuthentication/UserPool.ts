import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'ap-south-1_wfLpqbssZ',
    ClientId: '8fiq0u4g3619h8bab6rmlr9k5',
}

export default new CognitoUserPool(poolData)
