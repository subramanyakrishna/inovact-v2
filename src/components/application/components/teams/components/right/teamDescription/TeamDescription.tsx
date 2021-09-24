import React,{useState}  from 'react';
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
    const [showAll, setShowAll] = useState(true);
    window.addEventListener("resize",()=>{
            if(window.innerWidth>768){
                setShowAll(true);
            }
            if(window.innerWidth<=768){
                setShowAll(false);
            }
    });
    return(
        <div className="teams-description">
           <div className="teams-description__info">
             <div className="teams-description__info__left">
                   <img src={team.avatar} alt="teamImage" />
                   <div className="teams-description__info__left__text">
                      <button className=" button--blue text-align--center sm-small" >Group Chat </button>
                  
                   </div>
             </div>
             
               <div className="teams-description__info__right">
               <span className="text-style--bold text-align--left text-size--big " >{team.teamname} </span> 
                    <span className="text-style--bold text-align--left text-size--big sm-small" style={{marginTop:'1rem'}}>Number of Projects : <span className="text-style--bold text-color--green  text-align--left text-size--big sm-small" style={{marginLeft:'1rem'}}>9 </span> </span> 

                    <span className="text-style--bold text-align--left text-size--big sm-small">Number of Ideas : <span className="text-style--bold text-align--left text-color--green text-size--big sm-small" style={{marginLeft:'1rem'}}>21 </span> </span>             
                    <span className="text-style--bold text-align--left text-size--big sm-small" style={{marginTop:'15px'}} >Project Tags </span>
                    {showAll ?  
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
                </ul>:<TeamTags team={team}/>}
               </div>
           </div>
         </div>
    
    )
}
export default TeamDescription;