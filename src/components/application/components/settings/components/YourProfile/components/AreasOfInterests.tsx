import { makeApiCall } from 'components/application/components/otheruser-connections/components/connectionsUtils'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface interestI {
    id: number
    interest: string
}

function AreasOfInterests({ handleUserInfoChange, userInfo }: any) {
    const [currentInterest, setCurrentInterest] = useState('')
    const [interests, setInterests] = useState<any>([])
    const [searchRes, setSearchRes] = useState<any>([])
    const [aoiData, setAoiData] = useState<any>([])
    const aoi = useSelector((state: any) => state.userInfo['user_interests'])

    useEffect(() => {
        // handleUserInfoChange('area-of-interest', interestData)
        //call the api for all interests
        ;(async () => {
            const response = await makeApiCall('get', 'token/interests')
            const interestData = response.data.data.area_of_interests
            setInterests(interestData)
            let aoiDataTemp = aoi.map((interestId: number) =>
                interestData.find((interest: any) => interest.id === interestId)
            )
            aoiDataTemp = aoiDataTemp.filter(
                (interest: interestI) => interest !== undefined
            )
            setAoiData(aoiDataTemp)
        })()
    }, [])

    const handleClickDelete = (id: number) => {
        handleUserInfoChange(
            'user_interests',
            aoi.filter((interest: interestI) => interest.id !== id)
        )
        setAoiData([...aoiData.filter((interest: any) => interest.id !== id)])
    }

    const handleInputChange = (e: any) => {
        setCurrentInterest(e.target.value)
        if (e.target.value === '') {
            setSearchRes([])
            return
        }

        const pattern = new RegExp(e.target.value, 'i')
        console.log('interests', interests)
        const matchedInterest = interests.filter(
            (interest: any) => interest.interest.match(pattern) !== null
        )
        setSearchRes(matchedInterest)
    }

    const addTheSkill = (res: any) => {
        if (!aoi.includes(res)) {
            handleUserInfoChange('user_interests', [...aoi, res])

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
