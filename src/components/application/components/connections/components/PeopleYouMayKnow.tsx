import React, { useEffect, useState } from 'react'
import PeopleToKnowProfiles from './PeopleToKnowProfiles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RightFilterDropdown from './RightFilterDropdown'
import { updatePeopleYouMayKnow } from 'redux/actions/connectionsAction'
import { useDispatch, useSelector } from 'react-redux'
import { users, skillsLocal } from '../usersData'

function PeopleYouMayKnow({ makeApiCall }: any) {
    const [showFilter, setShowFilter] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('role')
    const [selectedFilterValue, setSelectedFilterValue] = useState('student')
    const [organisationList, setOrganisationList] = useState<any>()
    const [skillsListId, setSkillsListId] = useState<any>([])
    const [skillsListData, setSkillListData] = useState<any>()
    const [filteredUsers, setFilteredUsers] = useState<any>([])
    const dispatch = useDispatch()
    const people_you_may_know = useSelector(
        (state: any) => state.connections.people_you_may_know
    )

    useEffect(() => {
        //call the api to get all the people you may know
        const people_you_may_know_from_api = users

        dispatch(updatePeopleYouMayKnow(people_you_may_know_from_api))

        const pattern = new RegExp(selectedFilterValue, 'i')
        const filteredUsersTemp = people_you_may_know_from_api.filter(
            (user: any) => user[currentFilter].match(pattern) !== null
        )
        setFilteredUsers(filteredUsersTemp)

        let uniqueOrganisationsSet = new Set()
        people_you_may_know_from_api.map((user: any) =>
            uniqueOrganisationsSet.add(user.organization)
        )
        setOrganisationList(Array.from(uniqueOrganisationsSet))

        let skillsSet = new Set()
        people_you_may_know_from_api.forEach((user: any) =>
            user.skills.forEach((skill: any) => skillsSet.add(skill))
        )
        const skillsIds = Array.from(skillsSet)
        setSkillsListId(skillsIds)

        //Now Call skills Api to get all  skills
        const skillsToDisplay = skillsIds.map(
            (skill: any) => skillsLocal[skill]
        )

        setSkillListData(skillsToDisplay)
    }, [])

    const handleFilterShow = () => {
        setShowFilter(!showFilter)
    }

    const filterOptionSelector = async (
        category: string,
        selectedValue: string
    ) => {
        setCurrentFilter(category)

        if (category != 'skills') {
            setSelectedFilterValue(selectedValue)
            const pattern = new RegExp(selectedValue, 'i')
            const filteredUsersTemp = await people_you_may_know.filter(
                (user: any) => user[category].match(pattern) !== null
            )
            await setFilteredUsers(filteredUsersTemp)
        } else {
            const skillId = parseInt(selectedValue)
            const filteredUsersTemp = await people_you_may_know.filter(
                (user: any) => user[category].indexOf(skillId) != -1
            )
            await setFilteredUsers(filteredUsersTemp)
            const selectedSkill = skillsListData.filter(
                (skill: any) => skill.id == skillId
            )[0]
            setSelectedFilterValue(selectedSkill.name)
        }
        setTimeout(() => {
            setShowFilter(false)
        }, 300)
    }

    const sendConnectRequest = async (id: number) => {
        await makeApiCall('POST', `connections/request?user_id=${id}`)
    }
    return (
        <div>
            <div className="line-separation">
                <hr className="line-separation-line" style={{}} />
                <div
                    onMouseLeave={() => {
                        setTimeout(() => {
                            setShowFilter(false)
                        }, 300)
                    }}
                    className="line-separation-filterDisplay"
                >
                    <span>
                        Filter:{' '}
                        <label onClick={handleFilterShow}>
                            {`(${currentFilter} : ${selectedFilterValue})`}
                            <span>
                                {showFilter ? (
                                    <ChevronRightIcon />
                                ) : (
                                    <ExpandMoreIcon />
                                )}
                            </span>
                        </label>
                    </span>
                    {showFilter && (
                        <RightFilterDropdown
                            filterOptionSelector={filterOptionSelector}
                            organisationList={organisationList}
                            skillsListData={skillsListData}
                        />
                    )}
                </div>
            </div>
            <div className="people-you-may-know">
                <div className="people-you-may-know-title">
                    <p>People you may know</p>
                </div>
                <div>
                    <div className="people-you-may-know-profiles">
                        {filteredUsers.length != 0 &&
                            filteredUsers.map((user: any, i: any) => (
                                <PeopleToKnowProfiles
                                    key={i}
                                    user={user}
                                    sendConnectRequest={sendConnectRequest}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleYouMayKnow
