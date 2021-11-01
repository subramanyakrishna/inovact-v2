import TeamTag from "./TeamTag";
import React, { useState,useEffect } from 'react';
import AddCircleSharp from "@material-ui/icons/AddCircleSharp";
import { useSelector } from "react-redux";
import axios from 'axios';
import Spinner from 'components/application/Spinner';
import { useHistory } from 'react-router';


function TeamsPartOf(props:any) {
  const [myTeams,setMyTeams]=useState([]);
  const history=useHistory();
  const teamsData = [
    {
      img:
        "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
      name: "Team Name",
      membersCount: 122
    },
    {
      img:
        "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
      name: "Team Name",
      membersCount: 122
    },
    {
      img:
        "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
      name: "Team Name",
      membersCount: 122
    }
  ];
  const userInfo = useSelector((state: any)=> state.otherUser);

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

useEffect(()=>{
  (async ()=>{
      await getTheUserTeam();
  })();
}, [])
  return (
      <div className="dashboard-main">
            <div className="teams-part-of">
      <div className="teams-part-of-heading">
        <p>{userInfo.first_name}'s Team</p>
      </div>
     
        {myTeams.length >0?  <div className="teams-part-of-all-teams"> {myTeams.slice(0,3).map((team: any) => {
          return (
            <TeamTag
              img={team.avatar}
              teamName={team.name}
              membersCount={team.team_members.length}
            />
          );
        })}
         <a className="teams-part-of-view-all-btn" href="/app/otherteams">View All</a>
        </div>:<div className="text-align--center">{userInfo.first_name} is not a part of any team yet </div>
        }
     
     
    </div>
      </div>
    
  );
}
export default TeamsPartOf;
