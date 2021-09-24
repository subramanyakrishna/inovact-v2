import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import MemberInfo from 'components/application/components/teams/components/teamInfo/MemberInfo'
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
]
    
const MemberInfoTab =(props: any)=>{
    return(
        <>
        <div className="member-info-tab">
        {
            teamInfo.map((item,index)=>{
                return(
                   <MemberInfo />
                );
            })}
                    <button className="text-style--bold text-color--green member-info-tab__addFile" onClick={props.openDocument}>
                            Invite Members <AddIcon className="text-style--bold text-color--green member-info-tab__addFile__icon"/>
                        </button>
        </div>
    
        </>
    )
}
export default MemberInfoTab;