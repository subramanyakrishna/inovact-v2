import React, { useState,useEffect } from 'react';
import {
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import Invitation from 'components/application/components/teams/components/left/Invitations';
import UserTeam from 'components/application/components/teams/components/left/userTeams/UserTeamsList'
import TeamInfo from 'components/application/components/teams/components/teamInfo/TeamInfo'
import TeamDescription from 'components/application/components/teams/components/right/teamDescription/TeamDescription'
import axios from 'axios'
//icons
import MenuIcon from '@material-ui/icons/Menu';
import pdf from 'images/teams/pdf.svg'
import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'
import { useDispatch } from 'react-redux'
import { getTeams } from 'redux/actions/teams';

//Modals
import InviteMembers from 'components/application/components/teams/components/modals/InviteMembers';
import DeleteMember from 'components/application/components/teams/components/modals/DeleteMember';
import MakeAdmin from 'components/application/components/teams/components/modals/MakeAdmin';
import ShareModal from 'components/application/components/teams/components/modals/ShareModal' 
import UploadDocuments from 'components/application/components/teams/components/modals/UploadDocuments';

import useRequests from 'useRequest/useRequest'

function Teams() {

    const allTeams = useSelector((state: any) => state.teams.teams)
    const [myTeams,setMyTeams]=useState<any>([]);
    const [activeTeamId,setActiveTeamId] = useState(0);
    
    const handleJoinMember  = async () =>{
        const response =  await axios( {
            method:'get',
            url:"https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team",
            headers: {
                "Authorization": localStorage.getItem("user"),
            }
        }).catch((error)=> {console.log(error)})
      if(!response){
        alert("Cannot get team");
      }
      else{
        console.log(response)
        setMyTeams(response.data.data.team) 
        setActiveTeamId(allTeams[0]["id"])
        console.log(allTeams[0]["id"])
         console.log("first id",activeTeamId)
      }
    }

    const [verticalActive, setVerticalActive] = useState(activeTeamId);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTeams('user'))
        handleJoinMember();
    }, []);

   

    //Modals
    const [showOverlay, setShowOverlay] = useState(false);
    const [showUploadDocument, setShowUploadDocument] = useState(false);
    const [showMakeAdmin, setShowMakeAdmin] = useState(false);
    const [showDeleteMember, setShowDeleteMember] = useState(false);
    const [showInviteMember, setShowInviteMember] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
 
    //Responsive
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);
   
      useEffect (()=>{
        if(window.innerWidth>768){
          setShowLeft(true);
          setShowRight(true);   
        }
        else {
          setShowLeft(false);
          setShowRight(true);   
        }
      },[])
    window.addEventListener("resize",()=>{
            if(window.innerWidth>768){
                setShowLeft(true);
                setShowRight(true);   
            }
            if(window.innerWidth<=768){
                setShowLeft(false);
                setShowRight(true);   
            }
    });
    

  const toggleShowOptions = ()=>{
    if(window.innerWidth<768){
    setShowLeft(!showLeft);
    setShowRight(!showRight);
    }
  }

  const openModal = ()=>{
        setShowOverlay(true);
        window.scrollTo(0,0);
        document.body.style.overflowY="hidden";
    }
    const closeModal = ()=>{
        setShowOverlay(false);
        setShowMakeAdmin(false);
        setShowDeleteMember(false);
        setShowInviteMember(false);
        document.body.style.overflowY="scroll";
    }

    const viewUploadDocument = ()=>{
        openModal();
        setShowUploadDocument(true);
    }
    const viewMakeAdmin = ()=>{
        openModal();
        setShowMakeAdmin(true);
    }
    const viewDeleteMember = ()=>{
        openModal();
        setShowDeleteMember(true);
    }
    const viewInviteMember = ()=>{
        openModal();
        setShowInviteMember(true);
    }
    const viewShareModal = ()=>{
      openModal();
      setShowShareModal(true);
  }
    const handleVerticalClick = (value: number) => {
      if (value === verticalActive) {
        return;
      }
      setVerticalActive(value);
    };
    
    return (

      <div>
      {
            showOverlay && 
            <div>
                <div className="modal_overlay" onClick={closeModal}></div>
                {
                    showUploadDocument && 
                          <UploadDocuments closeModal={closeModal}/>
                }
                {
                    showMakeAdmin &&
                         <MakeAdmin closeModal={closeModal}/>
                }
                {
                  showShareModal &&
                       <ShareModal closeModal={closeModal} />
                }
                {
                    showInviteMember && 
                        <InviteMembers  team_id={verticalActive}  viewShareModal={viewShareModal} closeModal={closeModal}  />
                }
                {
                    showDeleteMember &&
                        <DeleteMember closeModal={closeModal}/>
                }
            </div>
        }
     
    <div className="teams">
        
        <div className="teams__content">
       
              <div className="teams__content__header">
                <img src={back} alt="" />
                <h6 className="text-style--bold text-align--left text-size--big">Teams</h6>
                <div>
                    <img src={add} alt="" style={{marginRight:'1rem'}}/>
                    <MenuIcon onClick={toggleShowOptions}/>
                </div>
            </div>
            {
              showLeft && 
                  <div className="teams__content__left" >         
                    <div className="teams__content__user-teams" onClick={toggleShowOptions}>
                        <UserTeam allTeams={allTeams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                    </div>
                    <div className="teams__content__suggestions team-info__suggestion">
                        <Invitation allTeams={allTeams} active_id={verticalActive}/>
                    </div>
                </div>
            }
                      
            {
              showRight && <MDBTabsContent className="teams__content__right" >
              { allTeams && allTeams.map((team :any,key:any)=>{
              return(
                  <MDBTabsPane show={verticalActive ===  team.id }>
                      <div className="teams__content__info">
                          <div className="teams__content__team-description">
                              <TeamDescription team={team} />
                          </div>
                          <div className="teams__content__team-info">
                              <TeamInfo team={team} viewInviteMember={viewInviteMember} viewUploadDocument={viewUploadDocument} viewDeleteMember={viewDeleteMember} viewMakeAdmin={viewMakeAdmin} />
                          </div>
                      </div>
                </MDBTabsPane>
            )})}
            </MDBTabsContent>
            }
            
        </div>
    </div>
</div>
    );
}

export default Teams
