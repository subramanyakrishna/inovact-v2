import React, { useState } from 'react'
import SkillTags from '../../UploadProject/components/SkillTags'
import { ICreateTeam } from 'redux/interfaces/teams.interface'
import Tags from './Tags'
import { useSelector } from 'react-redux'

type Props = {
    teamDetails: ICreateTeam
    setTeamDetails: (teamDetails: any) => void
}

const TagsCovered = ({ setTeamDetails, teamDetails }: Props) => {
    const [tag, setTag] = useState('')

    const removeTag = (id: number) => {
        setTeamDetails({
            ...teamDetails,
            team_tags: teamDetails.tags.filter((ele: any) => ele !== id),
        })
    }
    const removeSkill = (index:any)=>{
        setSkillsNeeded(skillsNeeded.filter((ele,idx)=>idx!==index));
        // handleAddProjectChange("project_tags", addProject.project_tags.filter((tag: any)=>{return tag!==id}));
    }
    const [skillsNeeded, setSkillsNeeded] = useState<any[]>([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const allTags = useSelector((state: any)=> state.allTags);
    const [searchedTags, setSearchedTags] = useState<any>([]);
    const handleChangeInput = (e:any)=>{
        const value = e.target.value;
        if(value===""){
            setSearchedTags([]);
            setCurrentSkill(value);
        }else{
            setSearchedTags(allTags.filter((tag: any)=> tag.name.includes(value)).slice(0,4));
            setCurrentSkill(value);
        }
    }
   const addSkill = (skill: any)=>{
       if(!skillsNeeded.includes(currentSkill)){
            setSkillsNeeded([...skillsNeeded, skill]);
            setCurrentSkill("");
       }
       setSearchedTags([]);
   }
    return (
        <div className="tags-covered">
            <label>Team Tags</label>
            <div className="modal_part_one-tags-taginput">
                    <input type="text" placeholder="Type out the skills used" value={currentSkill} onChange={handleChangeInput}/>
                    <div className="modal_part_one-tags-dropdown">
                        {
                            searchedTags.map((tag: any)=><span onClick={(e)=>{
                                setCurrentSkill(tag.name);
                                addSkill(tag.name);
                                setTeamDetails({
                                    ...teamDetails,
                                    team_tags: Array.from(new Set([...teamDetails.team_tags, tag.id]))
                                })
                            }}>{tag.name}</span>)
                        }
                    </div>
                    {/* <button onClick={addSkill} className="modal_part_one-tags-tagbtn">+Add Tag</button> */}
                </div>
                <div className="modal_part_one-tags-all">
                    {
                        skillsNeeded.map((skill,index)=>{
                            const id = allTags.filter((tag: any)=>tag.name===skill)[0].id;
                            return (<Tags skill={skill} index={index} id={id} removeTag={()=>{
                                removeSkill(index);
                                removeTag(id)
                            }}/>);
                        })
                    }
                </div>
        </div>
    )
}

export default TagsCovered
