import React,{useState} from 'react'
import msg from 'images/teams/msg.svg'

const MemberInfo =(props:any)=>{
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOptions = ()=>{
        setShowOptions(!showOptions);
    }
    const toggleShowOptionsSlow = ()=>{
        setTimeout(()=>toggleShowOptions(),1000);
    }
                return(
                    <div className="members-info">
                        <div className="members-info__details">
                            <img src={props.member.user.avatar} alt="name"/>
                            <h5 className="text-size--big">{props.member.user.first_name}</h5>
                        </div>
                
                        <div className="members-info__details--contact">
                                <img src={msg} alt="msg"/>
                                <h5 className="text-size--big">Message Privately</h5>
                        </div>
                       {props.member.admin && <div className="members-info__details--role">
                                <h5 className="text-size--big">{props.member.role}</h5>
                                    <div className="members-info__details__dropdown">
                                        <button className="text-size--small" onClick={toggleShowOptions}>&#8942;</button>
                                        {
                                            showOptions &&
                                            <div className="drop-down--options--all" onMouseLeave={toggleShowOptionsSlow}>
                                                <span onClick={props.viewDeleteMember}>Delete</span>
                                                <span  onClick={props.viewMakeAdmin}>Make Admin</span>
                                            </div>
                                        }
                                     </div>
                            </div> } 
                        </div>
                );
}
export default MemberInfo;