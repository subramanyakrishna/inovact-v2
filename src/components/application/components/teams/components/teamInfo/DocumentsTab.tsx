import React from 'react'
import pdf from 'images/teams/pdf.svg'
import AddIcon from '@material-ui/icons/Add';

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
    

const DocumentsTab =(props:any)=>{
    return(
        <>
         <div className="documents-info">
        {
           props.team.documents.map((item:any,index:number)=>{
                return(
                        <div className="documents-info__document">
                            <img src={item} alt="name"/>
                            <h5 className="text-size--small">file name</h5>  
                        </div>    
                );
            })}
            <button className="text-style--bold text-color--green documents-info__addFile" onClick={props.openDocument}>
                Add File <AddIcon className="text-style--bold text-color--green documents-info__addFile__icon"/>
            </button>
             </div>
        </>
     
    )
}
export default DocumentsTab;