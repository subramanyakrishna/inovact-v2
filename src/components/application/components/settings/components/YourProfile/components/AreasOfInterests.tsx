import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const interestData = [
    'Java',
    'Java core',
    'Problem Solving',
    'OOP Concepts',
    'Problem Solving c++',
    'API dev',
    'react',
    'spring boot',
    'spring',
]
function AreasOfInterests({ handleUserInfoChange }: any) {
    const [skill, setSkill] = useState('')

    useEffect(() => {
        handleUserInfoChange('area-of-interest', interestData)
    }, [])

    const handleClickDelete = (index: number) => {
        console.log(index)
        const deletedInterest = aoi[index]
        handleUserInfoChange(
            'area-of-interest',
            aoi.filter((interest: string) => interest != deletedInterest)
        )
        setSkill('')
    }
    const handleClickAdd = () => {
        if (skill != '' && aoi.indexOf(skill) == -1) {
            handleUserInfoChange('area-of-interest', [...aoi, skill])
        }
    }
    const aoi: Array<string> = useSelector(
        (state: any) => state.userInfo['area_of_interests']
    )
    //area-of-interest
    return (
        <div className="settings-my-profile-area-of-interests">
            <span className="settings-my-profile-area-of-interests-heading">
                Areas of Interests
            </span>
            <div className="settings-my-profile-area-of-interests-allskills">
                {aoi.map((interest: string, i: number) => {
                    return (
                        <div className="settings-my-profile-area-of-interests-skills">
                            <span>{interest}</span>
                            <button onClick={() => handleClickDelete(i)}>
                                &#8213;
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="settings-my-profile-area-of-interests-addskills">
                <input
                    placeholder="+Add area of interest"
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            e.preventDefault()
                            handleClickAdd()
                        }
                    }}
                ></input>
            </div>
        </div>
    )
}

export default AreasOfInterests
