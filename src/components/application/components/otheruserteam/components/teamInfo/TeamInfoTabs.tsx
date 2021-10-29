import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import MemberInfoTab from 'components/application/components/otheruserteam/components/teamInfo/MembersTab/MemberInfoTab';
import ProjectInfoTab from 'components/application/components/otheruserteam/components/teamInfo/ProjectsTab/ProjectInfoTab';
import IdeaInfoTab from 'components/application/components/otheruserteam/components/teamInfo/IdeasTab/IdeaInfoTab';

const TeamInfo =(props:any)=>{
  const [basicActive, setBasicActive] = useState('members');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs className='team-info-tabs mb-3'>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('members')} active={basicActive === 'members'}>
            Members
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('projects')} active={basicActive === 'projects'}>
            Projects
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleBasicClick('ideas')} active={basicActive === 'ideas'}>
            Ideas
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'members'}>
          <MemberInfoTab team={props.team} /></MDBTabsPane>      
        <MDBTabsPane show={basicActive === 'projects'}>
          < ProjectInfoTab team={props.team}/>
           </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'ideas'}>
          <IdeaInfoTab team={props.team}/>
          </MDBTabsPane>
      </MDBTabsContent>
    </>
    )
}
export default TeamInfo;