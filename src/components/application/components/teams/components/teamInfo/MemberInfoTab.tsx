import React,{useState} from 'react'
import msg from 'images/teams/msg.svg'
import menu from 'images/teams/more.svg'
import MoreVert from '@material-ui/icons/MoreVert';
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
        {
            teamInfo.map((item,index)=>{
                return(
                   <MemberInfo />
                );
            })}
        </>
    )
}
export default MemberInfoTab;