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

const tags =[
  {
    tag :"Java"
  },
  {
    tag :"Problem Solving"
  },
  {
    tag :"OOPS"
  },
  {
    tag :"API"
  },
  {
    tag :"Java"
  },
  {
    tag :"Problem Solving"
  },
  {
    tag :"OOPS"
  },
  {
    tag :"API"
  },
  {
    tag :"Java"
  },
  {
    tag :"Problem Solving"
  },
  
  
]
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
             <div className="teams-description__info__left">
                   <img src={image} alt="teamImage" />
                   <div className="teams-description__info__left__text">
                   <h6 className="teams-description__info__left__text__title">Project Status</h6>
                   <p className="teams-description__info__left__text__title__status">Just Started</p>
                   </div>
                  
             </div>
             
               <div className="teams-description__info__right">
                    <h6 className="teams-description__info__right__teamname">{name}</h6>
                    <p>{description}</p>
                    <h6 className="teams-description__info__right__title" >Project Title </h6>
                    <h6 className="teams-description__info__right__title ">Project Tags </h6>
                    <ul  className="teams-description__info__right__tags"> {tags.map(({ tag }, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <h6 className="teams-description__info__right__tags__tag"
                                                >
                                                    {tag}
                                                </h6>
                                            </div>
                                        </li>
                                    )
                                })}
                              </ul>
               </div>
           </div>
           <div className="teams-description__info__progress">
       
         </div>
    </div>
    )
}
export default TeamDescription;