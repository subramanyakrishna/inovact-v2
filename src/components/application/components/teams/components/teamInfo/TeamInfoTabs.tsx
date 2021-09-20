import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import MemberInfo from 'components/application/components/teams/components/teamInfo/MemberInfo';
import RequestsTab from './Requests';
import DocumentsTab from './DocumentsTab'
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
          <MDBTabsLink  onClick={() => handleBasicClick('documents')} active={basicActive === 'documents'}>
            Documents
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('requests')} active={basicActive === 'requests'}>
            Requests
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'members'}><MemberInfo /></MDBTabsPane> 
        <MDBTabsPane show={basicActive === 'documents'}> <DocumentsTab /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'requests'}><RequestsTab /> </MDBTabsPane>
      </MDBTabsContent>
    </>
    )
}
export default TeamInfo;