import React from 'react'
import {userTeams} from 'data/data'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
  
  } from 'mdb-react-ui-kit';
interface Connection {
    name: string;
    image: string;
    designation: string;
    duration: string;
  }
interface UserTeams {
    id:number;
    name: string;
    image: string;
    description:string;
    progress:number;
    members: Connection[],
  }

interface AppProps {
    userTeams:UserTeams[],
    handleVerticalClick :any,
    idx:number
}
const UserTeams =({userTeams,handleVerticalClick,idx}:AppProps)=>{
    return(
        <div className="user-team">
            <div className="user-title">
            <h6 className="title" style={{padding:'1rem',border:' 4px solid blue',borderWidth:'4px 0 0 0',display:'inline-flex'}}>Teams</h6>
            </div>
         { userTeams.map(({id,name,image}:UserTeams,key)=>{
             return(
                <MDBTabs className='flex-column text-center'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleVerticalClick(id)} active={idx === id} >
                  <div className="user-team__tab">
                       <div className="user-team__tab__tabInfo">
                            <img src={image} alt=""/>
                            <h5 className="title">{name}</h5>
                       </div>
                   </div>
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
             )
         } )}

       
    </div>
    )
}
export default UserTeams;