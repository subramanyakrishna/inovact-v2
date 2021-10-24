import TeamTag from "./TeamTag";
import AddCircleSharp from "@material-ui/icons/AddCircleSharp";
import { useSelector } from "react-redux";
function TeamsPartOf(props:any) {
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
  return (
      <div className="dashboard-main">
            <div className="teams-part-of">
      <div className="teams-part-of-heading">
        <p>{userInfo.first_name}'s Team</p>
      </div>
      <div className="teams-part-of-all-teams">
        {teamsData.map((team: any) => {
          return (
            <TeamTag
              img={team.img}
              teamName={team.name}
              membersCount={team.membersCount}
            />
          );
        })}
      </div>
      <button className="teams-part-of-view-all-btn">View All</button>
    </div>
      </div>
    
  );
}
export default TeamsPartOf;
