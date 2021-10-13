import React, { useEffect, useState } from 'react'
import PeopleToKnowProfiles from './PeopleToKnowProfiles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RightFilterDropdown from './RightFilterDropdown'
import { updatePeopleYouMayKnow } from 'redux/actions/connectionsAction'
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../usersData'

function PeopleYouMayKnow({ makeApiCall }: any) {
    const [showFilter, setShowFilter] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('role')
    const ownRole = useSelector((state: any) => state.userInfo.role)
    const [selectedFilterValue, setSelectedFilterValue] = useState(ownRole)
    const [organisationList, setOrganisationList] = useState<any>()
    const [filteredUsers, setFilteredUsers] = useState<any>()
    const dispatch = useDispatch()
    const peopleYouMayKnow = useSelector(
        (state: any) => state.connections.people_you_may_know
    )

    useEffect(() => {
        //call the api to get all the people you may know
        dispatch(updatePeopleYouMayKnow(users))
        setFilteredUsers(users)
        const organisationsOfAllUser = users.map((user) => user.organization)
        const uniqueOrganisations = new Set([...organisationsOfAllUser])
        setOrganisationList(Array.from(uniqueOrganisations))
        filterOptionSelector('role', ownRole)
    }, [])

    const handleFilterShow = () => {
        setShowFilter(!showFilter)
    }

    const filterOptionSelector = (category: string, selectedValue: string) => {
        setCurrentFilter(category)
        setSelectedFilterValue(selectedValue)
        setTimeout(() => {
            setShowFilter(false)
        }, 300)
        console.log(category, selectedValue)
        const pattern = new RegExp(selectedValue, 'i')
        const filteredUsersTemp = peopleYouMayKnow.filter(
            (user: any) => user[category].match(pattern) !== null
        )
        setFilteredUsers(filteredUsersTemp)
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
                        {filteredUsers &&
                            filteredUsers.map((user: any) => (
                                <PeopleToKnowProfiles
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
