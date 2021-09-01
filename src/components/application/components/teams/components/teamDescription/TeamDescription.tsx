import React,{useState}  from 'react';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
const teamInfo =
    {
        name:'Team Name',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        progress:75

    }

    const ReadMore = ({ children } : any) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
        <div>
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...Read more" : " Show less"}
            </span>
        </div>
          
      
        );
      };
interface Props{
  name:string;
  description:string;
  image:string;
  progress:number;
}
const TeamDescription =({name , description,image,progress}:Props)=>{
    return(
        <div className="teams-description">
           <div className="teams-description__info">
               <img src={image} alt="teamImage" />
               <div className="teams-description__info__text">
                    <h6 className="title">{name}</h6>
                    <p><ReadMore children={description}/></p>
               </div>
           </div>
           <div className="teams-description__info__progress">
           <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={6}
        styles={buildStyles({
         
          strokeLinecap: "butt",
          textColor: "black",
          pathColor: "#02bd63",
          trailColor: "grey"
        })}
      />
           </div>
        </div>
    )
}
export default TeamDescription;