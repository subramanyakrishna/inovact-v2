import React from 'react'

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
  
  } from 'mdb-react-ui-kit';

import {teamData }from 'components/application/components/teams/teamData';
import UserTeam from 'components/application/components/teams/components/left/userTeams/UserTeam';
interface AppProps {
    allTeams:teamData[],
    handleVerticalClick :any,
    idx:number
   
}
const UserTeamsList =({allTeams,handleVerticalClick,idx}:AppProps)=>{
    return(
        <div className="user-team">
            <div className="user-title">
            <h6 className="text-style--bold text-align--left text-size--big" style={{padding:'1rem',border:' 4px solid blue',borderWidth:'4px 0 0 0',display:'inline-flex'}}>Teams</h6>
            </div>
          { allTeams.map((team :any)=>{
             return(
                <MDBTabs className='flex-column text-center'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleVerticalClick(team.id)} active={idx === team.id} >
                      <UserTeam teamname={team.name}  avatar={team.avatar} />
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
             )
         } )}
    </div>
    )
}
export default UserTeamsList;