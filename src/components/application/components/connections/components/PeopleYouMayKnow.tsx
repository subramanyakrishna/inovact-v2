import React from 'react'
import PeopleToKnowProfiles from './PeopleToKnowProfiles';

function PeopleYouMayKnow() {
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    return (
        <div className="people-you-may-know">
            <div className="people-you-may-know-title">
                <p>People you may know</p>
            </div>
            <div>
                <div className="people-you-may-know-profiles">
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                    <PeopleToKnowProfiles/>
                </div>
            </div>
        </div>
    )
}

export default PeopleYouMayKnow;
