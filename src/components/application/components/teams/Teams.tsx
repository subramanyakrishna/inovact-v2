import React, { useState } from 'react';
import {
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';

import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'
import SuggestionInvitation from 'components/application/components/teams/components/teamInfo/SuggestionInvitation';
import UserTeam from 'components/application/components/teams/components/userTeams/UserTeamsList'
import TeamInfo from 'components/application/components/teams/components/teamInfo/TeamInfo'
import TeamDescription from 'components/application/components/teams/components/teamDescription/TeamDescription'

import MenuIcon from '@material-ui/icons/Menu';
import {userTeams} from 'data/data'
import {teamData }from './TeamData';

import Navbar from 'components/application/components/NavBar'
interface Connection {
    name: string;
    image: string;
    designation: string;
    duration: string;
}
interface UserTeams {
    id:number;
    name: string;
    image: string;
    description:string;
    progress:number;
    members: Connection[],
}

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
            documents: ['',''],
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
        },
        {
            id: 2,
            teamname: 'Team Name 2',
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
            documents: ['',''],
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
        },
        {
            id: 3,
            teamname: 'Team Name 3',
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
            documents: ['',''],
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
        }
    ])
    const [verticalActive, setVerticalActive] = useState(1);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showMakeAdmin, setShowMakeAdmin] = useState(false);
    const [showDeleteMember, setShowDeleteMember] = useState(false);
    const [showInviteMember, setShowInviteMember] = useState(false);

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
    
    const makeAdmin = ()=>{
        openModal();
        setShowMakeAdmin(true);
    }
    const deleteMember = ()=>{
        openModal();
        setShowDeleteMember(true);
    }
    const inviteMember = ()=>{
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
            showOverlay && <div>
                <div className="modal_overlay" onClick={closeModal}></div>
                {
                    showMakeAdmin &&
                    <div>ADmin
                    </div>
                }
                {
                    showInviteMember &&
                    <div>
                       Invite
                    </div>
                }
                {
                    showDeleteMember &&
                    <div>
                      Delete
                    </div>
                }
            </div>
        }

     
    <div className="teams">
        <Navbar />
        <div className="teams__content">
            <div className="teams__content__header">
                <img src={back} alt="" />
                <h6 className="heading-secondary ">Teams</h6>
                <div>
                <img src={add} alt="" style={{marginRight:'1rem'}}/>
                    <MenuIcon />
                </div>
            </div>

            <div className="teams__content__left">
                <div className="teams__content__user-teams">
                    <UserTeam teams={teams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                </div>
                <div className="team-info__suggestion">
                    <SuggestionInvitation />
                </div>
            </div>

            <MDBTabsContent className="teams__content__right" >
                { teams.map((team,key)=>{
                return(
                    <MDBTabsPane show={verticalActive ===  team.id }>
                        <div className="teams__content__info">
                            <div className="teams__content__team-description">
                                <TeamDescription team={team}/>
                            </div>
                            <div className="teams__content__team-info">
                                <TeamInfo />
                            </div>
                        </div>
                  </MDBTabsPane>
             )})}
          </MDBTabsContent>
        </div>
    </div>
</div>
    );
}

export default Teams
