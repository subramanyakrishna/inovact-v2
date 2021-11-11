import userPool from './UserPool'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { useHistory } from 'react-router'

const userSignup = ({ email_id, password, user_name }: any) => {
    const attributeData = {
        Name: 'email',
        Value: email_id,
    }
    const attribute = new CognitoUserAttribute(attributeData)

    const attributeList: any = []
    attributeList.push(attribute)

    userPool.signUp(
        user_name,
        password,
        attributeList,
        [],
        (err: any, data: any) => {
            if (err) {
                alert(err.message || JSON.stringify(err))
                return
            }

            window.location.href = '/login'
            alert('Check Your Mail and Verify the account before login ;)')
            //

            // localStorage.setItem("user",data.user.storage["CognitoIdentityServiceProvider.39gv12htis5sor640kodj7os34.be627e0a-2903-4537-bee3-287ce8ddcc3c.idToken"]);
        }
    )
}
export default userSignup
