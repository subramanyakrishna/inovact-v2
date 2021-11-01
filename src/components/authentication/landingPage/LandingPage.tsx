import React, { useEffect } from 'react'
import Navbar from 'components/authentication/landingPage/components/Navbar'
import About from 'components/authentication/landingPage/components/About'
import Mission from 'components/authentication/landingPage/components/Mission'
import Hero from 'components/authentication/landingPage/components/Hero'
import Features from 'components/authentication/landingPage/components/Features'
import Achievements from 'components/authentication/landingPage/components/Achievements'
import Testimonials from 'components/authentication/landingPage/components/Testimonials'
import Contact from 'components/authentication/landingPage/components/Contact'
import Footer from 'components/authentication/landingPage/components/Footer'
import useRequests from 'useRequest/useRequest'
import { handleInterestsChange, handleRolesChange, handleSkillsChange, handleTagsChange } from 'StateUpdateHelper'

function LandingPage() {
    const { doRequest: getAllTags, errors: tagErrors } = useRequests({
        route: 'token/tags',
        method: 'get',
        body: null,
        onSuccess: (data: any) => {
            console.log(data)
            handleTagsChange('udpate_all_tags', data.data.hashtag)
        },
    })
    const { doRequest: getAllSkills, errors: skillsErrors } = useRequests({
        route: 'token/skills',
        method: 'get',
        body: null,
        onSuccess: (data: any) => {
            console.log(data)
            handleSkillsChange('udpate_all_skills', data.data.skills)
        },
    })
    const { doRequest: getAllRoles, errors: rolesErrors } = useRequests({
        route: 'token/roles',
        method: 'get',
        body: null,
        onSuccess: (data: any) => {
            console.log(data)
            handleRolesChange('udpate_all_roles', data.data.roles)
        },
    });
    const {doRequest: getAllInterests, errors: interestsErrors} = useRequests({
        route: "token/interests",
        method: "get",
        body: null,
        onSuccess: (data: any)=>{
            console.log("The interests data received is :",data);
            handleInterestsChange("interests_update",data.data.area_of_interests);
        }
    });
    useEffect(()=>{
        (async()=>{
            await getAllTags();
            await getAllRoles();
            await getAllSkills();
            await getAllInterests();
        })();
    },[])
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Mission />
            <Features />
            <Achievements />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage
