import React, { useEffect, useState } from 'react'
import PeopleToKnowProfiles from './PeopleToKnowProfiles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RightFilterDropdown from './RightFilterDropdown'
import { updatePeopleYouMayKnow } from 'redux/actions/connectionsAction'
import { useDispatch, useSelector } from 'react-redux'
import { skillsLocal } from '../usersData'
import axios from 'axios'
import Spinner from 'components/application/Spinner'

// function PeopleYouMayKnow({ makeApiCall }: any) {
function PeopleYouMayKnow(props: any) {
    const makeApiCall = async (method: any, route: string) => {
        console.log('method', method)
        console.log('route', route)
        // if(people_you_may_know.length!==0){
        //     return;
        // }
        const response = await axios({
            method: method,
            url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/${route}`,
            headers: {
                Authorization: localStorage.getItem('user'),
                'Content-Type': 'application/json',
            },
        })
        return response
    }
    const [showFilter, setShowFilter] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('role')
    const [selectedFilterValue, setSelectedFilterValue] = useState('student')
    const [organisationList, setOrganisationList] = useState<any>()
    // const [skillsListId, setSkillsListId] = useState<any>([])
    const [skillsListData, setSkillListData] = useState<any>()
    const [filteredUsers, setFilteredUsers] = useState<any>([])
    const [showAllUsers, setShowAllUsers] = useState<boolean>(true)
    const dispatch = useDispatch()
    const people_you_may_know = useSelector(
        (state: any) => state.connections.people_you_may_know
    )
    const userId = useSelector((state: any) => state.userInfo.id)

    const getFilteredUsers = (people_you_may_know_from_api: any) => {
        const pattern = new RegExp(selectedFilterValue, 'i')
        console.log(currentFilter)
        const filteredUsersTemp = people_you_may_know_from_api.filter(
            (user: any) =>
                (user[currentFilter]
                    ? user[currentFilter].match(pattern) !== null
                    : false) && user.id != userId
        )
        return filteredUsersTemp
    }
    const getUniqueOrganisations = (people_you_may_know_from_api: any) => {
        let uniqueOrganisationsSet = new Set()
        people_you_may_know_from_api.map((user: any) =>
            uniqueOrganisationsSet.add(user.organization)
        )
        return Array.from(uniqueOrganisationsSet)
    }
    const getFilteredSkills = async (PYMK_from_api: any) => {}

    useEffect(() => {
        //call the api to get all the people you may know
        ;(async () => {
            let PYMK_from_api: any = await makeApiCall('get', 'users')
            PYMK_from_api.data.data.user.reverse()
            PYMK_from_api = PYMK_from_api.data.data.user
            //romove this when skills is added to api
            PYMK_from_api = PYMK_from_api.map((pymk: any) => ({
                ...pymk,
                skills: Array.from(
                    {
                        length: 4,
                    },
                    () => Math.floor(Math.random() * 10)
                ),
            }))

            dispatch(updatePeopleYouMayKnow(PYMK_from_api))

            const filteredUsersTemp = getFilteredUsers(PYMK_from_api)
            setFilteredUsers(filteredUsersTemp)

            const uniqueOrganisations = getUniqueOrganisations(PYMK_from_api)
            setOrganisationList(uniqueOrganisations)

            let skillsSet = new Set()
            PYMK_from_api.forEach((user: any) => {
                user.skills.forEach((skill: any) => skillsSet.add(skill))
            })
            const skillsIds = Array.from(skillsSet)
            // setSkillsListId(skillsIds)

            //Now Call skills Api to get all  skills
            const uniqueSkills = skillsIds.map(
                (skill: any) => skillsLocal[skill]
            )

            setSkillListData(uniqueSkills)
        })()
    }, [])

    const handleFilterShow = () => {
        setShowFilter(!showFilter)
    }

    const filterOptionSelector = async (
        category: string,
        selectedValue: string
    ) => {
        if (category == 'All') {
            setFilteredUsers(people_you_may_know)
        } else if (category == 'skills') {
            setCurrentFilter(category)
            const skillId = parseInt(selectedValue)
            const filteredUsersTemp = await people_you_may_know.filter(
                (user: any) => user[category].indexOf(skillId) != -1
            )
            await setFilteredUsers(filteredUsersTemp)
            const selectedSkill = skillsListData.filter(
                (skill: any) => skill.id == skillId
            )[0]
            setSelectedFilterValue(selectedSkill.name)
            setShowAllUsers(false)
        } else {
            setCurrentFilter(category)
            setSelectedFilterValue(selectedValue)
            const pattern = new RegExp(selectedValue, 'i')
            const filteredUsersTemp = people_you_may_know.filter((user: any) =>
                user[category] ? user[category].match(pattern) !== null : false
            )
            setFilteredUsers(filteredUsersTemp)
            setShowAllUsers(false)
        }
        setTimeout(() => {
            setShowFilter(false)
        }, 300)
    }

    const sendConnectRequest = async (id: number) => {
        setFilteredUsers(filteredUsers.filter((user: any) => user.id != id))
        const res = await makeApiCall(
            'post',
            `connections/request?user_id=${id}`
        )
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
                        {
                            <label onClick={handleFilterShow}>
                                {showAllUsers
                                    ? `All`
                                    : `(${currentFilter} : ${selectedFilterValue})`}
                                <span>
                                    {showFilter ? (
                                        <ChevronRightIcon />
                                    ) : (
                                        <ExpandMoreIcon />
                                    )}
                                </span>
                            </label>
                        }
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
                        {
                            filteredUsers.length ===0 &&
                            <Spinner/>
                        }
                        {filteredUsers.length !==0 &&
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
