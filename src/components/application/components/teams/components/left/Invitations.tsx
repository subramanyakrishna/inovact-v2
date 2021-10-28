import React, { useState ,useEffect} from 'react'

const SuggestionInvitation = (props :any) => {

    const currentTeam= props.allTeams.filter((ele:any)=>ele.id === props.active_id )[0]
    const teamId = currentTeam.id;
    return (
        <div className="suggestions">
            <h6 className="suggestions__title">Team Invitation</h6>
            { currentTeam.team_invitations == 0 ? <div className="text-align--center">You haven't Invited anyone yet </div>: null }
             { currentTeam && currentTeam.team_invitations.map((team :any,key:any)=>{
              return(
                <div className="suggestions__row">
                <div className="suggestions__row__rowInfo">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt=""
                    />

                    <div className="suggestions__row__text">
                        <h5 className="text-style--bold text-align--left text-size--big">
                        {team.user.first_name}
                        </h5>
                        <p className="text-style--light text-align--left text-size--small">
                       {/* { new Date(team.invited_at).toUTCString() } */}
                        </p>
                    </div>
                </div>
                <div className="suggestions__row__buttons">
                    <button className="suggestions__row__button--white">
                        Cancel
                    </button>
                </div>
            </div>
            )})} 
          
        </div>
    )
}
export default SuggestionInvitation
