import React, { useState } from 'react'
import SkillTags from './SkillTags';

function RolesLookingFor() {
    const allSkills = ["Competitive Programming", 
    "Python", 
    "Java", 
    "C/C++", 
    "JavaScript", 
    "NodeJs", 
    "React Js", 
    "Angular", 
    "Django", 
    "Perl", 
    "PHP", 
    "Express Js", 
    "Excel", 
    "Marketing", 
    "Data Science", 
    "MySQL", 
    "MongoDB", 
    "DBMS",
    'Algorithms',
    'Analytical Skills',
    'Big Data',
    'Calculating',
    'Compiling Statistics',
    'Data Analytics',
    'Data Mining',
    'Database Design',
    'Database Management',
    'Documentation',
    'Modeling',
    'Modification',
    'Needs Analysis',
    'Quantitative Research',
    'Quantitative Reports',
    'Statistical Analysis',
    'Applications',
    'Certifications',
    'Coding',
    'Computing',
    'Configuration',
    'Customer Support',
    'Debugging',
    'Design',
    'Development',
    'Hardware',
    'Implementation',
    'Information Technology',
    'Infrastructure',
    'Languages',
    'Maintenance',
    'Network Architecture',
    'Network Security',
    'Networking',
    'New Technologies',
    'Operating Systems',
    'Programming',
    'Restoration',
    'Security',
    'Servers',
    'Software',
    'Solution Delivery',
    'Storage',
    'Structures',
    'Systems Analysis',
    'Technical Support',
    'Technology',
    'Testing',
    'Tools',
    'Training',
    'Troubleshooting',
    'Usability',
    'Benchmarking',
    'Budget Planning',
    'Engineering',
    'Fabrication',
    'Following Specifications',
    'Operations',
    'Performance Review',
    'Project Planning',
    'Quality Assurance',
    'Quality Control',
    'Scheduling',
    'Task Delegation',
    'Task Management',
    'Blogging',
    'Digital Photography',
    'Digital Media',
    'Facebook',
    'Instagram',
    'Networking',
    'Pinterest',
    'SEO',
    'Social Media Platforms',
    'Twitter',
    'Web Analytics',
    'Client Relations',
    'Email',
    'Requirements Gathering',
    'Research',
    'Subject Matter Experts (SMEs)',
    'Technical Documentation'];

    const [skillSelected, setSkillSelected] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const [searchSkills, setSearchSkills] = useState<string[]>([]);

    const handleInputChange = (e:any) =>{
        const value = e.target.value;
        setCurrentSkill(value);
        if(value===""){
            setSearchSkills([]);
            return;
        }
        console.log("change");
        const searchedSkills = allSkills.filter((skill)=>skill.toLowerCase().includes(value.toLowerCase())).slice(0,5);
        console.log(searchedSkills);
        setSearchSkills(searchedSkills);
    }

    const addTheSkill = (e:any) =>{
        const value = e.target.getAttribute("data-value");
        if(!skillSelected.includes(value))
            setSkillSelected([...skillSelected, value]);
        setCurrentSkill("");
        setSearchSkills([]);
    }

    const removeTheSkill = (skill: any)=>{
        setSkillSelected(skillSelected.filter((ele)=> ele!==skill));
    }

    return (
        <div className="roles_looking_for">
            <div className="roles_looking_for-add-role">
                <input type="text"/>
                <button>+Add Role</button>
            </div>
            <div className="roles_looking_for-add-skills">
                <input type="text" placeholder="Type out the skills required for the above mentioned role" value={currentSkill} onChange={handleInputChange}/>
                {
                    (searchSkills.length!==0) &&
                    <div className="search_skills">
                        {
                            searchSkills.map((skill)=>{
                                return (<span onClick={addTheSkill} data-value={skill}>{skill}</span>)
                            })
                        }
                    </div>
                }
                <div>
                    {
                        skillSelected.map((skill)=>{
                            return (<SkillTags skill={skill} removeSkill={removeTheSkill}/>);
                        })
                    }
                    {/* <SkillTags skill="OOP"/>
                    <SkillTags skill="Python"/>
                    <SkillTags skill="C++"/>
                    <SkillTags skill="Files"/> */}
                </div>
                
            </div>
        </div>
    )
}

export default RolesLookingFor;
