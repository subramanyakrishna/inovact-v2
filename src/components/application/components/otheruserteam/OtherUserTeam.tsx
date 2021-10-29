import React, { useState,useEffect } from 'react';
import {
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';

import UserTeam from 'components/application/components/teams/components/left/userTeams/UserTeamsList'
import TeamInfo from 'components/application/components/otheruserteam/components/teamInfo/TeamInfo'
import TeamDescription from 'components/application/components/otheruserteam/components/teamInfo/TeamDescription'

//icons
import MenuIcon from '@material-ui/icons/Menu';
import back from 'images/teams/back.svg'
import add from 'images/teams/add.svg'

import { handleAllUserIdeas, handleAllUserProject, handleAllUserThoughts, handleOtherUserInfoChange } from 'StateUpdateHelper';

import useRequests from 'useRequest/useRequest'
import axios from 'axios';
import Spinner from 'components/application/Spinner';
import { useHistory } from 'react-router';

function Teams() {
    
   
    const history = useHistory();   
    const [myTeams,setMyTeams]=useState([]);
    const [otherUserId,setotherUserId] = useState(33);
  
    

    const getTheUserTeam = async()=>{
        if(localStorage.getItem("other-user")){
            const userId = localStorage.getItem("other-user");
            await axios({
                method: "get",
                url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user/team?user_id=36`,
                headers: {
                    "Authorization": localStorage.getItem("user"),
                }
            }).then((resp: any)=>{
                console.log("other user id",userId)
                console.log("result of api call",resp.data.data.team)
                setMyTeams(resp.data.data.team);
               
                console.log("first team",resp.data.data.team)
                // setotherUserId(firstTeam.id);
                
            }).then(()=>{
                history.push("/app/otherteams");
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    const [verticalActive, setVerticalActive] = useState(32);

    useEffect(()=>{
      (async ()=>{
          await getTheUserTeam();
      })();
    }, [])

   
 
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

  
    const handleVerticalClick = (value: number) => {
      if (value === verticalActive) {
        return;
      }
      console.log(verticalActive)
      console.log(localStorage.getItem("user"));
      console.log(localStorage.getItem("other-user"));
      setVerticalActive(value);
    };
    
    return (

      <div>
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
                        <UserTeam allTeams={myTeams} handleVerticalClick={handleVerticalClick} idx={verticalActive} />
                    </div>
                </div>
            }
                      
            {
              showRight && <MDBTabsContent className="teams__content__right" >
              { myTeams && myTeams.map((team :any,key:any)=>{
              return(
                  <MDBTabsPane show={verticalActive ===  team.id }>
                      <div className="teams__content__info">
                          <div className="teams__content__team-description">
                              <TeamDescription team={team} />
                          </div>
                          <div className="teams__content__team-info">
                              <TeamInfo team={team}  />
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
