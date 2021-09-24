import React,{useState} from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SuggestionInvitation from 'components/application/components/teams/components/teamInfo/SuggestionInvitation';
import TeamInfoTabs from 'components/application/components/teams/components/teamInfo/TeamInfoTabs';
import InviteMembers from './InviteMembersModal';

const TeamInfo =(props:any)=>{
  const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = ()=>{
        setShowPopUp(!showPopUp);
    }

    const closePopUp = ()=>{
        setShowPopUp(false);
    }
  return (
    <>
    <div className="teams-info">
      <div className="teams-info__details">
        <p>5 out of 15 members</p>
        <div  className='teams-info__details--dropdown' onClick={togglePopUp}>
             Invite Team Members
        </div>
        {showPopUp &&
         <InviteMembers />
         }
      </div>
    
      <div className="teams-info__tabs">
         <TeamInfoTabs team={props.team} openUpload={props.openUpload}/>
      </div>
    </div>
      
    </>
    )
}
export default TeamInfo;