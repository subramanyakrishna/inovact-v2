import React, {useState} from 'react';
import RequestProfile from './RequestProfile';
import ConnectionProfile from './ConnectionProfile';

function CenterRequests() {

    const [showRequest, setShowRequest] = useState(true);
    const [showConnection, setShowConnection] = useState(false);

    const handleRequestButton = (event:any)=>{
        setShowRequest(true);
        setShowConnection(false);
    }
    const handleConnectionButton = (event:any)=>{
        event.target.style.borderBottom="2px solid blue";
        setShowRequest(false);
        setShowConnection(true);
    }

    return (
        <div className="requests-connections">
            <div className="requests-connections-btn">
                <button onClick={handleRequestButton} style={{borderBottom: showRequest?"5px solid #5579BD":"none"}}>Requests (10)</button>
                <button onClick={handleConnectionButton} style={{borderBottom: showConnection?"5px solid #5579BD":"none"}}>My Connections (473)</button>
            </div>
            {
                showRequest &&
                <div className="requests-connections-profiles">
                    <div>
                        <RequestProfile/>
                        <RequestProfile/>
                        <RequestProfile/>
                        <RequestProfile/>
                        <RequestProfile/>
                        <RequestProfile/>
                    </div>
                </div>
            }
            {
                showConnection && 
                <div className="requests-connections-profiles">
                    <div>
                        <ConnectionProfile/>
                        <ConnectionProfile/>
                        <ConnectionProfile/>
                        <ConnectionProfile/>
                        <ConnectionProfile/>
                        <ConnectionProfile/>
                    </div>
                </div>
            }
        </div>
    )
}

export default CenterRequests;
