import React from 'react'
const RequestsTab =(props:any)=>{
    return(
        <>
         { props.requests.length == 0 ? <div className="text-align--center">No Requests yet </div>: null }
        {
           props.requests.map((request:any,index:number)=>{
                return(
                    <div className="requests-info">
                     <div className="requests-info__details">
                        <img src={request.image} alt="name"/>
                        <div className="requests-info__details__text">
                        <h5 className="text-style--bold text-align--left text-size--big">{request.name}</h5>
                            <p className="text-style--light text-align--left text-size--small">{request.designation}</p>
                            <p className="text-style--italic text-align--left text-color--gray text-size--small">{request.role}</p>
                        </div>
                    </div>
                               
                    <div className="requests-info__details__buttons">
                             <button className="requests-info__details__buttons--accept">Accept</button>
                         <button className="requests-info__details__buttons--white">Remove</button>
                    </div>
                    
                </div>
                );
            })}
        </>
     
    )
}
export default RequestsTab;