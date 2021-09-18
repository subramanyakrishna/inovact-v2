import React from 'react'
import LeftProfileContent from './components/LeftProfileContent/LeftProfileContent';
import TopProfileContent from './components/TopProfileContent/TopProfileContent';

function Profile() {
    return (
        <div>
            <div className="profile--content">
                <div className="profile--content-top-container">
                    <TopProfileContent/>
                </div>
                <div className="profile--content-bottom-container">
                    <div className="profile--content-left">
                        <LeftProfileContent/>
                    </div>
                    <div className="profile--content-right">
                        <div>This is just a filler text</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Profile
