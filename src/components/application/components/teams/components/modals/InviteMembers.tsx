import React,{useState,useEffect} from 'react';
import search from 'images/feed/search.svg'
import link from 'images/teams/cc-link.svg'
import { useSelector } from 'react-redux';
import useRequests from 'useRequest/useRequest'
import MemberForInvite from 'components/application/components/teams/components/modals/FindMembers'
function InviteMembers(props:any) {
    const [inviteMember, setinviteMember] = useState<any>([])
    const [buttonText, setButtonText] = useState("Invite"); 
    const changeText = () => setButtonText("Invited");
    const userInfo = useSelector((state: any) => state.userInfo);
    const { doRequest: getinviteMember, errors: getPeopleErrors } = useRequests(
        {
            route: 'users',
            method: 'get',
            body: null,
            onSuccess: (data: any) => {
                data.data.user.reverse()
                const ptk: any = data.data.user.map((ele: any) => ({
                    user_id: ele.id,
                    name: ele.first_name,
                    image: ele.avatar,
                    duration: '10 min',
                    designation: ele.designation ? ele.designation : 'Student',
                })).filter((ele: any)=>{
                    // console.log(ele.user_id, userInfo.id);
                    return ele.user_id!==userInfo.id});
                console.log(ptk);
                setinviteMember([...ptk.slice(0, 4)])
               console.log("hello token", localStorage.getItem('user'))
            },
        }
    )
    useEffect(()=>{
        (async ()=>{
            await getinviteMember();
        })();
    }, [])

    const handleInviteTeamMember = (e:any) => {
        //
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
                            
                      <button className="connect-button">Share Link</button>
                    </div>
               
                
                <div className="invite-members">
                { inviteMember.map((item :any,index :number)=>{
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