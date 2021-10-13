import React, { useState } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function RightFilterDropdown(props: any) {
    const [showRoles, setShowRoles] = useState(false)
    const [showOrganizations, setShowOrganizations] = useState(false)
    const [showSkills, setShowSkills] = useState(false)

    const handleRolesShow = (e: any) => {
        setShowRoles(!showRoles)
    }
    const handleOrganizationsShow = () => {
        setShowOrganizations(!showOrganizations)
    }
    const handleSkillsShow = () => {
        setShowSkills(!showSkills)
    }
    const changeFilterOption = (
        category: string,
        selectedFilterValue: string
    ) => {
        console.log(
            'category:',
            category,
            'selectedFilterValue:',
            selectedFilterValue
        )
        props.filterOptionSelector(category, selectedFilterValue)
    }

    return (
        <div className="filter-dropdown">
            <div className="filter-dropdown-content">
                <div className="filter-dropdown-parameter">
                    <label onClick={handleRolesShow}>
                        Roles{' '}
                        <span>
                            {showRoles ? (
                                <ChevronRightIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </span>
                    </label>
                    {showRoles && (
                        <div className="filter-dropdown-roles">
                            {['Student', 'Mentor', 'Enterprenuer'].map(
                                (roletype, i) => (
                                    <label
                                        key={i}
                                        onClick={() =>
                                            changeFilterOption(
                                                'role',
                                                roletype.toLowerCase()
                                            )
                                        }
                                    >
                                        <span>{roletype}</span>{' '}
                                        <input type="checkbox" />
                                    </label>
                                )
                            )}
                        </div>
                    )}
                </div>
                <div className="filter-dropdown-parameter">
                    <label onClick={handleOrganizationsShow}>
                        Organization{' '}
                        <span>
                            {showOrganizations ? (
                                <ChevronRightIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </span>
                    </label>
                    {showOrganizations && (
                        <div className="filter-dropdown-roles">
                            {props.organisationList.map(
                                (organization: string) => (
                                    <label
                                        onClick={() =>
                                            changeFilterOption(
                                                'organization',
                                                organization.toLowerCase()
                                            )
                                        }
                                    >
                                        <span>{organization}</span>{' '}
                                        <input type="checkbox" />
                                    </label>
                                )
                            )}
                        </div>
                    )}
                </div>
                <div className="filter-dropdown-parameter">
                    <label onClick={handleSkillsShow}>
                        Skills{' '}
                        <span>
                            {showSkills ? (
                                <ChevronRightIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </span>
                    </label>
                    {showSkills && (
                        <div className="filter-dropdown-roles">
                            {['Python', 'Javascript', 'HTML/CSS'].map(
                                (skill) => (
                                    <label
                                        onClick={() =>
                                            changeFilterOption(
                                                'skill',
                                                skill.toLowerCase()
                                            )
                                        }
                                    >
                                        <span>{skill}</span>{' '}
                                        <input type="checkbox" />
                                    </label>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RightFilterDropdown
