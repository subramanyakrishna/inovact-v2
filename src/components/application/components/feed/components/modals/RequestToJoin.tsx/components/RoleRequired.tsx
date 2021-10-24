import React from 'react'

function RoleRequired(props: any) {
    return (
        <div className="roles-required-all">
            <div>
                <input type="checkbox" className="roles-required-all-checkbox"/>
            </div>
            <div className="roles-required-all-main">
                <span className="roles-required-all-role">{props.role}</span>
                <div className="roles-required-all-skills">
                    {props.skills.map((skill:any, i:Number, arr: Array<String>)=>{
                        if(i==arr.length-1){
                            return <span>{skill}</span>
                        }
                        return <span>{skill}, </span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoleRequired;
