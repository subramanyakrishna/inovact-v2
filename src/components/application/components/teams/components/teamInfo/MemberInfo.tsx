import React,{useState} from 'react'
import msg from 'images/teams/msg.svg'
import menu from 'images/teams/more.svg'
import MoreVert from '@material-ui/icons/MoreVert';
    
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
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="name"/>
                            <h5 className="members-info__details__title">Jane Doe</h5>
                        </div>
                
                        <div className="members-info__details--contact">
                                <img src={msg} alt="msg"/>
                                <h5 className="members-info__details__title">Message Privately</h5>
                        </div>
                    
                        <div className="members-info__details--role">
                                <h5 className="members-info__details__title">Role</h5>
                                <button style={{border:'none',backgroundColor:'transparent'}} onClick={toggleShowOptions}>
                                    <MoreVert />
                                </button>
                                        {
                                        showOptions &&
                                        <div className="members-info__details__dropdown__list" onMouseLeave={toggleShowOptionsSlow}>
                                            <span  className="members-info__details__dropdown__list__element" onClick={props.showDelete}>Delete</span>
                                            <span className="members-info__details__dropdown__list__element" onClick={props.showAdmin}>Make Admin</span>
                                        </div>
                                        }
                        </div>
                    </div>
                );
}
export default MemberInfo;