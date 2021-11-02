import TeamTag from "./TeamTag";
import AddCircleSharp from "@material-ui/icons/AddCircleSharp";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function TeamsPartOf(props:any) {
  const history = useHistory()
  const userTeams = useSelector((state: any)=>state.teams.teams);
  return (
      <div className="dashboard-main">

      <div className="teams-part-of">
      <div className="teams-part-of-heading">
        <p>{props.userName}'s Team</p>
        <AddCircleSharp style={{color:"#02bd63", cursor:"pointer"}} onClick={props.createTeam}/>
      </div>
      <div className="teams-part-of-all-teams">
        {userTeams.length === 0 ? <div>No Teams Yet</div> : ( userTeams && userTeams.map((team: any) => {
          return (
            <TeamTag
              image={ team.avatar ? team.avatar:"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"}
              teamName={team.name}
              membersCount={team.team_members.length}
            />
          );
        }))}
       
      </div>
      <button className="teams-part-of-view-all-btn" onClick={() => history.push('/app/teams')}>View All</button>
    </div>
      </div>
    
  );
}
export default TeamsPartOf;
