import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SuggestionInvitation from 'components/application/components/teams/components/teamInfo/SuggestionInvitation';
import TeamInfoTabs from 'components/application/components/teams/components/teamInfo/TeamInfoTabs';

const TeamInfo =()=>{
  return (
    <>
    <div className="teams-info">
      <div className="teams-info__details">
        <p>5 out of 15 members</p>
        <MDBDropdown group className='teams-info__details--dropdown shadow-0'>
        <MDBDropdownToggle color='link' style={{color:'black'}}>Invite Team members</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Something</MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </div>

      <div className="team-info__suggestion">
        <SuggestionInvitation />
      </div>

      <div className="teams-info__tabs">
       <TeamInfoTabs />
      </div>
    </div>
      
    </>
    )
}
export default TeamInfo;