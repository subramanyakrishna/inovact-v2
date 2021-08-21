import React, { useState } from 'react'
import RoleSelection from './components/roleSelection/RoleSelection'
import UserDetails from './components/userDetails/UserDetails'
import Mentor from './components/mentor/Mentor'
import Enterprenuer from './components/enterprenuer/Enterprenuer'
import AreaOfInterest from './components/areaOfInterest/AreaOfInterest'
import UploadPicture from './components/upload/Upload'

interface UserInfo {
    step: number,
	role:string,
   
    university: string,
    degree: string,
    year: string,
    bio: string,
    image: string,
    
    //mentor
    McurrDesignation: string,
    McurrOrganization: string,
    profExperience: string,

    //enterprenuer
    EcurrOrganization: string,
    EcurrRole: string,
    EstartOfJourney: string,
}
const UserInfoForm= () => {
    const [formstep, setFormStep] = useState<UserInfo>({
        step: 1,

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
   
    const prevStep = (stepNum: number) => {
        setFormStep(prevState => ({
            ...prevState,
            step: stepNum
        }));
    }

    const nextStep = (stepNum: number) => {
        setFormStep(prevState => ({
            ...prevState,
            step: stepNum
        }));
    }

    const handleChange = (input: any) => (e: any) => {
        if(e.target.tagName === 'IMG') {
            setFormStep(prevState => ({
                ...prevState,
                [input]: e.target.id
                
            }));
            setFormStep(prevState => ({
                ...prevState,
                role: e.target.id
               
            }));
            console.log("Hi" +formstep.role);
        } else {
            setFormStep(prevState => ({
                ...prevState,
                [input]: e.target.value
            }));
        }
    }

    const FormStep =() =>{
        switch (formstep.step) {
            case 1:
                return (
                    <RoleSelection
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formstep}
                    />
                )
            case 2:
                return (
                    <div>
                        <UserDetails
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                            values={formstep}
                        />
                    </div>
                )

            case 3:
                return (
                    <div>
                        {formstep.role === 'mentor' && (
                            <Mentor
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={formstep}
                            />
                        )}
                        {formstep.role === 'enterprenuer' && (
                            <Enterprenuer
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                               values={formstep}
                            />
                        )}
                        {formstep.role === 'student' && (
                            <AreaOfInterest
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={formstep}
                            />
                        )}
                    </div>
                )
            case 4:
                return (
                    <AreaOfInterest
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formstep}
                    />
                )
            case 5:
                return (
                    <UploadPicture
                        prevStep={prevStep}
                        nextStep={nextStep}
                        values={formstep}
                        handleChange={handleChange}
                    />
                )

            default:
            // do nothing
        }
    }
 
    return(
        <div> {FormStep()}</div>
    )
}

export default UserInfoForm;