import React, { useState,useEffect } from 'react';
import {
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';

import SuggestionInvitation from 'components/application/components/teams/components/left/SuggestionInvitation';
import UserTeam from 'components/application/components/teams/components/left/userTeams/UserTeamsList'
import TeamInfo from 'components/application/components/teams/components/teamInfo/TeamInfo'
import TeamDescription from 'components/application/components/teams/components/right/teamDescription/TeamDescription'

//icons
import MenuIcon from '@material-ui/icons/Menu';
import pdf from 'images/teams/pdf.svg'
import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'

//schema
import {teamData }from 'components/application/components/teams/teamData';

//Modals
import InviteMembers from 'components/application/components/teams/components/modals/InviteMembers';
import DeleteMember from 'components/application/components/teams/components/modals/DeleteMember';
import MakeAdmin from 'components/application/components/teams/components/modals/MakeAdmin';
import UploadDocuments from 'components/application/components/teams/components/modals/UploadDocuments';

function Teams() {
    const [teams,setTeams] =useState<teamData[]>([
        {
            id: 1,
            teamname: 'Team Name',
            title: 'React Web dev',
            description: 'rLorem ipsum dolor sit amet consectetu adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborunumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
            tags: [
                'OOPS',
                'JavaScript',
                'HTML',
                'CSS',
                'ReactJS',
                'NodeJS',
                'MongoDB',
            ],
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            members: [
                {
                id:"1",
                role:'student',
                name:'Jane Doe',
                designation:'Designation'
              },
              {
                id:"2",
                role:'student',
                name:'Jane Doe',
                designation:'Designation'
              },
            ],
            documents: [pdf,pdf],
            requests: [
                {
                id:"1",
                role:'student',
                name:'Jane Doe',
                designation:'Designation'
              },
              {
                id:"2",
                role:'student',
                name:'Jane Doe',
                designation:'Designation'
              },
            ],
            projects:[
              {
                title:'Project Title',
                status :true
              },
              {
                title:'Project Title',
                status :true
              },
              {
                title:'Project Title',
                status :false
              },
            ],
            ideas :[
            {
              title:'Idea Title',
            },
            {
              title:'Idea Title',
            },
             ]
        },
        {
          id: 3,
          teamname: 'Team Name',
          title: 'React Web dev',
          description: 'rLorem ipsum dolor sit amet consectetu adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborunumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
          tags: [
              'OOPS',
              'JavaScript',
              'HTML',
              'CSS',
              'ReactJS',
              'NodeJS',
              'MongoDB',
          ],
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          members: [
              {
              id:"1",
              role:'student',
              name:'Jane Doe',
              designation:'Designation'
            },
            {
              id:"2",
              role:'student',
              name:'Jane Doe',
              designation:'Designation'
            },
          ],
          documents: [pdf,pdf],
          requests: [
              {
              id:"1",
              role:'student',
              name:'Jane Doe',
              designation:'Designation'
            },
            {
              id:"2",
              role:'student',
              name:'Jane Doe',
              designation:'Designation'
            },
          ],
          projects:[
            {
              title:'Project Title',
              status :true
            },
            {
              title:'Project Title',
              status :true
            },
            {
              title:'Project Title',
              status :false
            },
          ],
          ideas :[
          {
            title:'Idea Title',
          },
          {
            title:'Idea Title',
          },
           ]
      },
      {
        id: 3,
        teamname: 'Team Name',
        title: 'React Web dev',
        description: 'rLorem ipsum dolor sit amet consectetu adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborunumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
        tags: [
            'OOPS',
            'JavaScript',
            'HTML',
            'CSS',
            'ReactJS',
            'NodeJS',
            'MongoDB',
        ],
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        members: [
            {
            id:"1",
            role:'student',
            name:'Jane Doe',
            designation:'Designation'
          },
          {
            id:"2",
            role:'student',
            name:'Jane Doe',
            designation:'Designation'
          },
        ],
        documents: [pdf,pdf],
        requests: [
            {
            id:"1",
            role:'student',
            name:'Jane Doe',
            designation:'Designation'
          },
          {
            id:"2",
            role:'student',
            name:'Jane Doe',
            designation:'Designation'
          },
        ],
        projects:[
          {
            title:'Project Title',
            status :true
          },
          {
            title:'Project Title',
            status :true
          },
          {
            title:'Project Title',
            status :false
          },
        ],
        ideas :[
        {
          title:'Idea Title',
        },
        {
          title:'Idea Title',
        },
         ]
    },
   
       
    ])
    const [verticalActive, setVerticalActive] = useState(1);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showUploadDocument, setShowUploadDocument] = useState(false);
    const [showMakeAdmin, setShowMakeAdmin] = useState(false);
    const [showDeleteMember, setShowDeleteMember] = useState(false);

    const [showInviteMember, setShowInviteMember] = useState(false);

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
                    showInviteMember && 
                        <InviteMembers  closeModal={closeModal}/>
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
                        <UserTeam teams={teams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                    </div>
                    <div className="teams__content__suggestions team-info__suggestion">
                        <SuggestionInvitation />
                    </div>
                </div>
            }
                      
            {
              showRight && <MDBTabsContent className="teams__content__right" >
              { teams.map((team,key)=>{
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
