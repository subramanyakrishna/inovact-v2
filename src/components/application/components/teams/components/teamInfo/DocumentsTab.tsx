import React from 'react'
import pdf from 'images/teams/pdf.svg'


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
    

const DocumentsTab =()=>{
    return(
        <>
         <div className="documents-info">
        {
            teamInfo.map((item,index)=>{
                return(
                   
                        <div>
                            <img src={pdf} alt="name"/>
                            <h5 className="title">file name</h5>  
                        </div>    
               
                );
            })}
             </div>
        </>
     
    )
}
export default DocumentsTab;