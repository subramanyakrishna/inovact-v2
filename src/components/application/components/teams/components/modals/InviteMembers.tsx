import React,{useState,useEffect} from 'react';
import search from 'images/feed/search.svg'
import link from 'images/teams/cc-link.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { inviteMembers } from 'redux/actions/teams'
import MemberForInvite from 'components/application/components/teams/components/modals/FindMembers'
import axios from 'axios';
function InviteMembers(props:any) {
    const allTeams = useSelector((state: any) => state.teams.teams)
    const [inviteInfo, setInviteInfo] =useState({
        team_id:0,
        user_id:0,
    })
   
    const [buttonText, setButtonText] = useState("Invite"); 
    const changeText = () => setButtonText("Invited");
    const users =useSelector((state:any) => state.peopleYouMayKnow)
    const userInfo =useSelector((state:any) => state.userInfo)
    const dispatch = useDispatch()
    let filteredusers = users;
    const handleShareModal=(e:any)=>{
        props.closeModal();
        props.viewShareModal();
    }
    const handleInviteTeamMember  = async (e:any) =>{
        const currentTeam= allTeams.filter((ele:any)=>ele.id === props.team_id )[0]
        const teamId = currentTeam.id;
        const userId = e;
       
        // const addTeam = () => {
        //     dispatch(inviteMembers({user_id:userId,team_id: teamId}))
        // }
            filteredusers = users.filter(
            (user: any) => user.user_id != e
        )
       
        const response =  await axios( {
            method:'post',
            url:"https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/invite",
            data: { team_id:teamId, user_id:userId},
            headers: {
                "Authorization": localStorage.getItem("user"),
            }
        })
        
    }

    return (
        <div className="modal_main">
           
            <div className="modal_cover-invite">
            <button className="close-modal" onClick={props.closeModal} >&times;</button>
                <label className="modal_cover-title">Invite Members</label>
                <div className="modal_part_one-invite">
                <div className="modal_part_one-invite__fixed-top">
                          <div className="modal_part_one-invite__fixed-top__input">
                              <div className="modal_part_one-invite__fixed-top__input--search">
                              <input
                                            type="search"
                                            className="input-component--invite-search"
                                        />
                                        <img src={search} />
                              </div>

                           
                              <div className="modal_part_one-invite__fixed-top__input--link">
                              <input
                                            type="search"
                                            className="input-component--invite-search"
                                        />
                                         <img src={link} width="20"/>
                              </div>
                            </div>
                            
                      <button className="connect-button" onClick={handleShareModal}>Share Link</button>
                    </div>
               
                
                <div className="invite-members">
                { filteredusers.filter((item :any)=>item.user_id !== userInfo.id ).slice(0,5).map((item :any,index :number)=>{
                return(                   
                         <MemberForInvite item={item} handleInviteTeamMember={handleInviteTeamMember} />
                );
            })}
            </div>
                </div>                
            </div>
        </div>
    )
}

export default InviteMembers;