import React, { useState } from 'react'
import RoleSelection from 'components/authentication/userInfoForm/components/roleSelection/RoleSelection'
import UserDetails from 'components/authentication/userInfoForm/components/userDetails/UserDetails'
import Mentor from 'components/authentication/userInfoForm/components/mentor/Mentor'
import Enterprenuer from 'components/authentication/userInfoForm/components/enterprenuer/Enterprenuer'
import AreaOfInterest from 'components/authentication/userInfoForm/components/areaOfInterest/AreaOfInterest'
import UploadPicture from 'components/authentication/userInfoForm/components/upload/Upload'
import CheckoutPage from './Info/CheckoutPage';
interface UserInfo {
    role: string
    university: string
    degree: string
    year: string
    bio: string
    image: string

    //mentor
    McurrDesignation: string
    McurrOrganization: string
    profExperience: string

    //enterprenuer
    EcurrOrganization: string
    EcurrRole: string
    EstartOfJourney: string
}
const UserInfoForm = () => {
    let [step, setStep] = useState(1)
    const [user, setUser] = useState<UserInfo>({
        role: 'student',
        university: '',
        degree: '',
        year: '',
        bio: '',
        image: '',
        //mentor
        McurrDesignation: '',
        McurrOrganization: '',
        profExperience: '',

        //enterprenuer
        EcurrOrganization: '',
        EcurrRole: '',
        EstartOfJourney: '',
    })
    const setFormStep = (stepNum: number) => {
        setStep((step) => stepNum)
    }

    const handleChange = (input: any) => (e: any) => {
      
        if (e.target.tagName === 'IMG') {
            setUser((prevState) => ({
                ...prevState,
                [input]: e.target.id,
            }))
            setUser((prevState) => ({
                ...prevState,
                role: e.target.id,
            }))
            console.log(user.role)
        } else {
            setUser((prevState) => ({
                ...prevState,
                [input]: e.target.value,
            }))
        }
    }

    const FormStep = () => {
       
        switch (step) {
            case 1:
                return (
                    <RoleSelection
                        setFormStep={setFormStep}
                        handleChange={handleChange}
                        values={user}
                    />
                )
            case 2:
                return (
                    <div>
                        <UserDetails
                            setFormStep={setFormStep}
                            handleChange={handleChange}
                            values={user}
                        />
                    </div>
                )

            case 3:
                return (
                    <div>
                        {user.role === 'mentor' && (
                            <Mentor
                                setFormStep={setFormStep}
                                handleChange={handleChange}
                                values={user}
                            />
                        )}
                        {user.role === 'enterprenuer' && (
                            <Enterprenuer
                                setFormStep={setFormStep}
                                handleChange={handleChange}
                                values={user}
                            />
                        )}
                        {user.role === 'student' && (
                            <AreaOfInterest
                                setFormStep={setFormStep}
                                handleChange={handleChange}
                                values={user}
                            />
                        )}
                    </div>
                )
            case 4:
                return (
                    <AreaOfInterest
                        setFormStep={setFormStep}
                        handleChange={handleChange}
                        values={user}
                    />
                )
                case 6:
                    return (
                        <CheckoutPage/>
                    )
            case 5:
                return (
                    <UploadPicture
                        setFormStep={setFormStep}
                        handleChange={handleChange}
                        values={user}
                    />
                )
        

            default:
            // do nothing
        }
    }

    return <div className="user-info">
        <div className="user-info__card">
        {FormStep()}
        </div>
         
          </div>
}

export default UserInfoForm
