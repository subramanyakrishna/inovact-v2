import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import MemberInfo from 'components/application/components/teams/components/teamInfo/MemberInfo';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SuggestionInvitation from './SuggestionInvitation';
const TeamInfo =()=>{
  const [basicActive, setBasicActive] = useState('members');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

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
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('members')} active={basicActive === 'members'}>
Members
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('groupchat')} active={basicActive === 'groupchat'}>
            Group Chats
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('documents')} active={basicActive === 'documents'}>
            Documents
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'members'}><MemberInfo /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'groupchat'}>Group Chats</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'documents'}>Documents</MDBTabsPane>
      </MDBTabsContent>
      </div>
    </div>
      
    </>
    )
}
export default TeamInfo;