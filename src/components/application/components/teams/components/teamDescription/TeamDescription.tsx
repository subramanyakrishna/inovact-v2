import React,{useState}  from 'react';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props{
    name:string;
    description:string;
    image:string;
    progress:number;
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