import React from 'react';
import search from 'images/feed/search.svg'
const teamInfo =[
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    }

]
function InviteMembers(props:any) {
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
                                         <img src={search} />
                              </div>
                            </div>
                            
                      <button className=" connect-button">Share Link</button>
                    </div>
               
                
                <div className="invite-members">
                { teamInfo.map((item,index)=>{
                return(
                    <div className="invite-members__details">
                        <div className="invite-members__details__text">
                            <img src={item.image} alt="name"/>
                            <h5 className="invite-members__details__title">{item.name}</h5>
                        </div>
                            <button className="connect-button--green">Invite</button>
                    </div>
                );
            })}
            </div>
                </div>                
            </div>
        </div>
    )
}

export default InviteMembers;