import React, { useState } from 'react'
import SkillTags from './SkillTags'

function AddRolesLookingFor(props: any) {
    const allSkills = [
        'Competitive Programming',
        'Python',
        'Java',
        'C/C++',
        'JavaScript',
        'NodeJs',
        'React Js',
        'Angular',
        'Django',
        'Perl',
        'PHP',
        'Express Js',
        'Excel',
        'Marketing',
        'Data Science',
        'MySQL',
        'MongoDB',
        'DBMS',
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
        'Technical Documentation',
    ]

    const [skillSelected, setSkillSelected] = useState<string[]>([])
    const [currentSkill, setCurrentSkill] = useState('')
    const [searchSkills, setSearchSkills] = useState<string[]>([])
    const [roleInput, setRoleInput] = useState('')

    // const handleRoleInputChange = (e: any) => {
    //     //
    //     setRoleInput(e.target.value)
    // }

    // const handleInputChange = (e: any) => {
    //     const value = e.target.value
    //     setCurrentSkill(value)
    //     if (value === '') {
    //         setSearchSkills([])
    //         return
    //     }
    //     const searchedSkills = allSkills
    //         .filter((skill) =>
    //             skill.toLowerCase().includes(value.toLowerCase())
    //         )
    //         .slice(0, 5)
    //
    //     setSearchSkills(searchedSkills)
    // }

    // const addTheSkill = (e: any) => {
    //     const value = e.target.getAttribute('data-value')
    //     if (!skillSelected.includes(value))
    //         setSkillSelected([...skillSelected, value])
    //     setCurrentSkill('')
    //     setSearchSkills([])
    // }

    const removeTheSkill = (skill: any) => {
        setSkillSelected(skillSelected.filter((ele) => ele !== skill))
    }

    const handleAddRole = () => {
        props.addAnotherRole(roleInput, skillSelected)
        props.setTeamDetails({
            ...props.teamDetails,
            roles: [
                ...props.teamDetails.roles,
                {
                    role: roleInput,
                    skills: skillSelected,
                },
            ],
        })
        setSkillSelected([])
        setRoleInput('')
    }
    return (
        <div className="add_roles_looking_for">
            <div className="add_roles_looking_for-add-role">
                <input
                    type="text"
                    onChange={(e) => setRoleInput(e.target.value)}
                    value={roleInput}
                />
                <button
                    className="add_roles_looking_for-add-btn"
                    onClick={handleAddRole}
                >
                    +Add Role
                </button>
            </div>
            <div className="add_roles_looking_for-add-skills">
                <input
                    type="text"
                    placeholder="Type out the skills required for the above mentioned role"
                    value={currentSkill}
                    onChange={(e) => {
                        setCurrentSkill(e.target.value)
                        const skills = allSkills.filter((skill) =>
                            skill
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase())
                        )
                        setSearchSkills(skills)
                    }}
                />

                {searchSkills && searchSkills.length !== 0 && (
                    <div style={{ position: 'relative' }}>
                        <div className="search_skills">
                            {searchSkills.map((skill) => {
                                return (
                                    <span
                                        onClick={() => {
                                            setSkillSelected([
                                                ...skillSelected,
                                                skill,
                                            ])
                                            setCurrentSkill('')
                                            setSearchSkills([])
                                        }}
                                        data-value={skill}
                                    >
                                        {skill}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                )}
                {/* {
                    searchSkills.length !== 0 && (
                        <div>
                            <div className="search_skills">
                                {searchSkills.map((skill) => {
                                    return (
                                        <span
                                            onClick={() =>
                                                setSkillSelected([
                                                    ...skillSelected,
                                                    skill,
                                                ])
                                            }
                                        >
                                            {skill}
                                        </span>
                                    )
                                })}

                            </div>
                        </div>
                    )
                } */}

                <div>
                    {skillSelected.length !== 0 &&
                        skillSelected.map((skill) => {
                            return (
                                <SkillTags
                                    skill={skill}
                                    removeSkill={removeTheSkill}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default AddRolesLookingFor
