import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

const TeamInfo =()=>{
    const [justifyActive, setJustifyActive] = useState('members');

    const handleJustifyClick = (value: string) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };
    return(
        <div className="teams-info">
           <div className="team-info__tabs">
           <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('members')} active={justifyActive === 'members'}>
           Members
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('groupchats')} active={justifyActive === 'groupchats'}>
           Group Chats
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('documents')} active={justifyActive === 'documents'}>
            Documents
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'members'}>Members</MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'groupchats'}>Group Chats</MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'documents'}>Documents</MDBTabsPane>
      </MDBTabsContent>
           </div>
        </div>
    )
}
export default TeamInfo;