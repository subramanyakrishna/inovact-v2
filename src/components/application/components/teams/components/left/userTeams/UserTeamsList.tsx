import React from 'react'

import { MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit'

import UserTeam from 'components/application/components/teams/components/left/userTeams/UserTeam'

const UserTeamsList = (props: any) => {
    return (
        <div className="user-team">
            <div className="user-title fixed">
                <h6
                    className="text-style--bold text-align--left text-size--big"
                    style={{
                        padding: '1rem',
                        border: ' 4px solid blue',
                        borderWidth: '4px 0 0 0',
                        display: 'inline-flex',
                    }}
                >
                    Teams
                </h6>
            </div>
            {props.allTeams?.map((team: any) => {
                return (
                    <MDBTabs className="flex-column text-center user-team__list">
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() =>
                                    props.handleVerticalClick(team.id, team)
                                }
                                active={props.idx === team.id}
                            >
                                <UserTeam
                                    teamname={team.name}
                                    avatar={
                                        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                                    }
                                />
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                )
            })}
        </div>
    )
}
export default UserTeamsList
