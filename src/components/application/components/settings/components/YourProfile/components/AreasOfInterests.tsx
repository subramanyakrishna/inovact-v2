import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface interestI {
    id: number
    area: string
}

const interestData: interestI[] = [
    { id: 0, area: 'Java' },
    { id: 1, area: 'Java core' },
    { id: 2, area: 'Problem Solving' },
    { id: 3, area: 'OOP Concepts' },
    { id: 4, area: 'Problem Solving c++' },
    { id: 5, area: 'API dev' },
    { id: 6, area: 'react' },
    { id: 7, area: 'spring boot' },
    { id: 8, area: 'spring' },
    { id: 9, area: 'JEE' },
]

function AreasOfInterests({ handleUserInfoChange, userInfo }: any) {
    const [currentInterest, setCurrentInterest] = useState('')
    const [interests, setInterests] = useState<any>([])
    const [searchRes, setSearchRes] = useState<any>([])
    const [aoiData, setAoiData] = useState<any>([])
    const aoi = useSelector((state: any) => state.userInfo['area_of_interests'])

    useEffect(() => {
        // handleUserInfoChange('area-of-interest', interestData)
        //call the api for all interests

        setInterests(interestData)
        let aoiDataTemp = aoi.map((interestId: number) =>
            interestData.find((interest: any) => interest.id === interestId)
        )
        aoiDataTemp = aoiDataTemp.filter(
            (interest: interestI) => interest != undefined
        )
        setAoiData(aoiDataTemp)
        console.log('from use Effect aoiData ', aoiData)
    }, [])

    // const changeAoiIdToAoiData = () => {
    //     console.log(aoi)
    //     let aoiDataTemp = aoi.map((interestId: number) =>
    //         interests.find((interest: any) => interest.id === interestId)
    //     )
    //     console.log('1', aoiDataTemp)
    //     aoiDataTemp = aoiDataTemp.filter(
    //         (interest: interestI) => aoi != undefined
    //     )

    //     setAoiData(aoiDataTemp)
    // }

    const handleClickDelete = (index: number) => {
        console.log('handleClickDelete', index)

        handleUserInfoChange(
            'area-of-interest',
            aoi.filter((interest: number) => interest != index)
        )
        console.log('handleClickDelete', aoiData)
        setAoiData([...aoiData.filter((interest: any) => interest.id != index)])
    }

    const handleInputChange = (e: any) => {
        setCurrentInterest(e.target.value)
        if (e.target.value == '') {
            setSearchRes([])
            return
        }

        const pattern = new RegExp(currentInterest, 'i')
        const matchedInterest = interests.filter(
            (interest: any) => interest.area.match(pattern) !== null
        )
        setSearchRes(matchedInterest)
    }

    const addTheSkill = (res: any) => {
        if (!aoi.includes(res.id)) {
            console.log('addTheSkill', res)
            handleUserInfoChange('area-of-interest', [...aoi, res.id])

            setAoiData([...aoiData, res])
        }

        console.log('aoi', aoi)
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
                {searchRes.length != 0 && (
                    <div style={{ position: 'relative' }}>
                        <div className="search_skills">
                            {searchRes.map((res: any) => {
                                console.log('searchRes', res)
                                return (
                                    <span
                                        key={res.id}
                                        onClick={() => addTheSkill(res)}
                                        data-value={res.id}
                                    >
                                        {res.area}
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
                                    <span>{interest.area}</span>
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
                    })}
            </div>
        </div>
    )
}

export default AreasOfInterests
