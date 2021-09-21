import React,{useState}  from 'react';
import { isMobile } from "react-device-detect";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Props{
    team:any
}


const TeamTags = ({team}:Props) => {
        
  const [allTags, setallTags] = useState(false);
  const toggleReadMore = () => {
    setallTags(!allTags);
  };
  return (
  <div>
    {allTags ? <ul  className="teams-description__info__right__tags"> 
        {team.tags?.map((tag:string, index:any) => {
      return (
          <li key={index}>
              <div>
                  <h6 className="teams-description__info__right__tags__tag sm-small">
                      {tag}
                  </h6>
              </div>
          </li>
      )
  })}   
    <h6 className=" teams-description__info__right__tags__tag__arrow sm-extrasmall" onClick={toggleReadMore} >
  {allTags ? <ExpandLessIcon /> : <ExpandMoreIcon />}
 </h6>   
  </ul> :   <ul  className="teams-description__info__right__tags"> 
        {team.tags?.slice(0,1).map((tag :string, index:any) => {
      return (

          <li key={index}>
              <div>
                  <h6 className="teams-description__info__right__tags__tag sm-small">
                      {tag}
                  </h6>
              </div>
          </li>
          
      )
  })}
  <h6 className=" teams-description__info__right__tags__tag__arrow sm-extrasmall" onClick={toggleReadMore} >
  {allTags ? <ExpandLessIcon /> : <ExpandMoreIcon />}
 </h6>   
  </ul>}
      
  </div>
  );
}

const TeamDescription =({team}:Props)=>{
    return(
        <div className="teams-description">
           <div className="teams-description__info">
             <div className="teams-description__info__left">
                   <img src={team.avatar} alt="teamImage" />
                   <div className="teams-description__info__left__text">
                   <h6 className="text-style--bold text-align--center text-size--small sm-extrasmall ">Project Status</h6>
                   <p className="text-style--bold text-align--center text-size--small text-color--green sm-extrasmall">Just Started</p>
                   </div>
             </div>
             
               <div className="teams-description__info__right">
                    <h6 className="text-style--bold text-align--left text-size--big">{team.teamname}</h6>
                    <p className="sm-small">{team.description}</p>
                    <h6 className="text-style--bold text-align--left text-size--big sm-small" >Project Title </h6>
                    <span className="text-style--bold text-align--left text-size--big sm-small" style={{marginTop:'15px'}} >Project Tags </span>
                    {isMobile ?<TeamTags team={team}/>: 
                    <ul  className="teams-description__info__right__tags"> 
                      {team.tags?.map((tag:string, index:any) => {
                    return (
                        <li key={index}>
                            <div>
                                <h6 className="teams-description__info__right__tags__tag sm-small">
                                    {tag}
                                </h6>
                            </div>
                        </li>
                    )
                })}    
                </ul>}
               </div>
           </div>
         </div>
    
    )
}
export default TeamDescription;