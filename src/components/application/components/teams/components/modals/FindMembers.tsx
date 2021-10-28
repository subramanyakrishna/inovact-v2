import React,{useState,useEffect} from 'react';

function MemberForInvite(props:any) {
    const [buttonText, setButtonText] = useState("Invite"); 
    const changeText = () => setButtonText("Invited");
  
    const handleClick =(e :any) =>{
        
        props.handleInviteTeamMember(e);
        console.log("event",e)
        changeText();
    }
    return (
        <div className="invite-members__details">
            <div className="invite-members__details__text">
                <img src={props.item.image} alt="name"/>
                <h5 className="invite-members__details__title">{props.item.name}</h5>
            </div>
                <button className="connect-button--green" onClick={handleClick.bind( null, props.item.user_id)} style={{backgroundColor: buttonText== "Invite" ?"#02bd63": "grey"}}>{buttonText}</button>
        </div>
    )
}

export default MemberForInvite;