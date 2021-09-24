import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import MemberInfoTab from 'components/application/components/teams/components/teamInfo/MembersTab/MemberInfoTab';
import RequestsTab from 'components/application/components/teams/components/teamInfo/RequestsTab/RequestsTab';
import DocumentsTab from 'components/application/components/teams/components/teamInfo/DocumentsTab/DocumentsTab'
import ProjectInfoTab from 'components/application/components/teams/components/teamInfo/ProjectsTab/ProjectInfoTab';
import IdeaInfoTab from 'components/application/components/teams/components/teamInfo/IdeasTab/IdeaInfoTab';

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
        <MDBTabsPane show={basicActive === 'members'}>
          <MemberInfoTab team={props.team} viewInviteMember={props.viewInviteMember} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin} /></MDBTabsPane>      
        <MDBTabsPane show={basicActive === 'projects'}>
          < ProjectInfoTab team={props.team}/>
           </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'ideas'}>
          <IdeaInfoTab team={props.team}/>
          </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'documents'}> 
            <DocumentsTab team={props.team} viewUploadDocument={props.viewUploadDocument} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'requests'}>
            <RequestsTab requests={props.team.requests} /> 
        </MDBTabsPane>
      </MDBTabsContent>
    </>
    )
}
export default TeamInfo;