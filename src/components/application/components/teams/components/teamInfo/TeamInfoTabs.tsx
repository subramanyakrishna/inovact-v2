import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import MemberInfo from 'components/application/components/teams/components/teamInfo/MemberInfo';

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
    </>
    )
}
export default TeamInfo;