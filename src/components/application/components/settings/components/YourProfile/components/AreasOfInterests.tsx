import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface interestI {
    id: number
    interest: string
}

const interestData: interestI[] = [
    { id: 0, interest: 'Java' },
    { id: 1, interest: 'Java core' },
    { id: 2, interest: 'Problem Solving' },
    { id: 3, interest: 'OOP Concepts' },
    { id: 4, interest: 'Problem Solving c++' },
    { id: 5, interest: 'API dev' },
    { id: 6, interest: 'react' },
    { id: 7, interest: 'spring boot' },
    { id: 8, interest: 'spring' },
    { id: 9, interest: 'JEE' },
]

function AreasOfInterests({ handleUserInfoChange, userInfo }: any) {
    const [currentInterest, setCurrentInterest] = useState('')
    const [interests, setInterests] = useState<any>([])
    const [searchRes, setSearchRes] = useState<any>([])
    const [aoiData, setAoiData] = useState<any>([])
    const allInterests = useSelector((state: any)=>state.allInterests);
    const aoi = useSelector((state: any) => state.userInfo['area_of_interests'])

    useEffect(() => {
        // handleUserInfoChange('area-of-interest', interestData)
        //call the api for all interests

        setInterests(interestData)
        let aoiDataTemp = aoi.map((interestId: number) =>
            interestData.find((interest: any) => interest.id === interestId)
        )

        aoiDataTemp = aoiDataTemp.filter(
            (interest: interestI) => interest !== undefined
        )
        setAoiData(aoiDataTemp)
        setAoiData(userInfo.area_of_interests);
    }, [])

    const handleClickDelete = (index: number) => {
        handleUserInfoChange(
            'area-of-interest',
            aoi.filter((interest: number) => interest !== index)
        )
        setAoiData([
            ...aoiData.filter((interest: any) => interest.id !== index),
        ])
    }

    const handleInputChange = (e: any) => {
        setCurrentInterest(e.target.value)
        if (e.target.value === '') {
            setSearchRes([])
            return
        }

        const pattern = new RegExp(currentInterest, 'i')
        const matchedInterest = allInterests.filter(
            (interest: any) => interest.interest.match(pattern) !== null
        )
        setSearchRes(matchedInterest)
    }

    const addTheSkill = (res: any) => {
        if (!aoi.includes(res.id)) {
            handleUserInfoChange('area-of-interest', [...aoi, res.id])

            setAoiData([...aoiData, res])
        }

        setSearchRes([])
    }

    //area-of-interest
    return (
        <div className="settings-my-profile-area-of-interests">
            <span className="settings-my-profile-area-of-interests-heading">
                Areas of Interests
            </span>
            <div className="settings-my-profile-area-of-interests-select">
                <input
                    type="text"
                    placeholder="eg : java"
                    value={currentInterest}
                    onChange={handleInputChange}
                />
                {searchRes.length !== 0 && (
                    <div style={{ position: 'relative' }}>
                        <div className="search_skills">
                            {searchRes.map((res: any) => {
                                return (
                                    <span
                                        key={res.id}
                                        onClick={() => addTheSkill(res)}
                                        data-value={res.id}
                                    >
                                        {res.interest}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
            <div className="settings-my-profile-area-of-interests-allskills">
                {aoiData &&
                    aoiData.map((interest: interestI) => {
                        if (interest) {
                            return (
                                <div
                                    className="settings-my-profile-area-of-interests-skills"
                                    key={interest.id}
                                >
                                    <span>{interest.interest}</span>
                                    <button
                                        onClick={() =>
                                            handleClickDelete(interest.id)
                                        }
                                    >
                                        &#8213;
                                    </button>
                                </div>
                            )
                        }
                        return undefined
                    })}
            </div>
        </div>
    )
}

export default AreasOfInterests
