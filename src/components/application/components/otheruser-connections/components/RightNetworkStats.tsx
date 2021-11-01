import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function RightNetworkStats() {
    const otherUser = useSelector((state: any) => state.otherUser);
    const otherUserConnections = useSelector((state: any)=>state.otherUserConnections);
    const [totalConnections, setTotalConnections] = useState<number>(0)
    const totalConnectionsFromStore = useSelector(
        (state: any) => state.connections.my_connections.length
    )
    console.log()
    useEffect(() => {
        setTotalConnections(totalConnectionsFromStore)
    }, [totalConnectionsFromStore])
    const getLastWeek = ()=>{
        const today = new Date();
        const lastWeek = new Date(today.getFullYear(),today.getMonth(),today.getDate()-7);
        return lastWeek;
    }
    const lastWeek = getLastWeek();
    console.log('totalConnections', totalConnections)
    return (
        <div className="right-network-stats">
            <div
                className="right-network-stats--img-container"
                style={{ margin: 'auto' }}
            >
                <img
                    src={otherUser.avatar}
                    className="right-network-stats--img"
                />
                <span>{otherUser.first_name + ' ' + otherUser.last_name}</span>
                <h5>Your Network Stats</h5>
            </div>
            <div className="right-network-stats--content">
                <div className="right-network-stats--content-titles">
                    <p>
                        <span>Total connections</span>
                        <span>{otherUserConnections.length}</span>
                    </p>
                    <p>
                        <span>Last week's connections</span>
                        <span>{otherUserConnections.filter((con: any)=>new Date(con.formed_at).getTime() > lastWeek.getTime()).length}</span>
                    </p>
                    <p>
                        <span>{otherUser.first_name?otherUser.first_name:"User"}'s mentors</span>
                        <span>4</span>
                    </p>
                    <p>
                        <span>Appearances in People you may know</span>
                        <span>26</span>
                    </p>
                    <p>
                        <span>Percentage Growth</span>
                        <span style={{ color: '#07d400' }}>+3.95%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RightNetworkStats
