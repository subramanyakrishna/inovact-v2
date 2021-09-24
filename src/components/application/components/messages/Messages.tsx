import React,{useState} from 'react'
import {
    MDBTabsContent,
    MDBTabsPane,
  } from 'mdb-react-ui-kit';
import pdf from 'images/teams/pdf.svg'
import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'
import SuggestionInvitation from 'components/application/components/teams/components/teamInfo/SuggestionInvitation';
import UserTeam from 'components/application/components/teams/components/userTeams/UserTeamsList'

import MenuIcon from '@material-ui/icons/Menu';
import {teamData }from 'components/application/components/teams/teamData';

import Navbar from 'components/application/components/NavBar'

function Messages() {
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
            documents: [pdf,pdf,pdf],
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
            id: 4,
            teamname: 'Team Name 4',
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
            documents: [pdf,pdf,pdf],
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
    const handleVerticalClick = (value: number) => {
      if (value === verticalActive) {
        return;
      }
      setVerticalActive(value);
    };

    return (

      <div>    
    <div className="messages">
        <Navbar />
        <div className="messages__content">
            <div className="messages__content__header">
                <img src={back} alt="" />
                <h6 className="text-style--bold text-align--left text-size--big">Messages</h6>
                <div>
                    <img src={add} alt="" style={{marginRight:'1rem'}}/>
                    <MenuIcon />
                </div>
            </div>

            <div className="messages__content__left">
                <div className="messages__content__team-messages">
                    <UserTeam teams={teams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                </div>
                <div className="messages__content__personal-messages">
                     <UserTeam teams={teams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                </div>
            </div>

            <MDBTabsContent className="messages__content__right" >
                { teams.map((team,key)=>{
                return(
                    <MDBTabsPane show={verticalActive ===  team.id }>
                        <div className="messages__content__info">
                            <div className="messages__content__chat-box">
                              Messages
                            </div>
                        </div>
                  </MDBTabsPane>
             )})}
          </MDBTabsContent>
        </div>
    </div>
</div>
    )
}

export default Messages
