import React, { useState } from 'react';
import {
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';

import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'

import UserTeam from 'components/application/components/teams/components/userTeams/UserTeams'
import TeamInfo from 'components/application/components/teams/components/teamInfo/TeamInfo'
import TeamDescription from 'components/application/components/teams/components/teamDescription/TeamDescription'

import {userTeams} from 'data/data'

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
    const [verticalActive, setVerticalActive] = useState(1);
    const handleVerticalClick = (value: number) => {
      if (value === verticalActive) {
        return;
      }
      setVerticalActive(value);
    };

    return (
    <div className="teams">
        <Navbar />
        <div className="teams__content">
            <div className="teams__content__header">
                <img src={back} alt="" />
                <h6 className="heading-secondary ">Teams</h6>
                <img src={add} alt="" />
            </div>

            <div className="teams__content__user-teams">
                <UserTeam userTeams={userTeams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
            </div>

            <MDBTabsContent style={{width:'100%'}}>
                { userTeams.map(({id,name,description,image,progress}:UserTeams,key)=>{
                return(
                    <MDBTabsPane show={verticalActive === id}>
                        <div className="teams__content__info">
                            <div className="teams__content__team-description">
                                <TeamDescription name={name} description={description} image={image} progress={progress}/>
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
    );
}

export default Teams
