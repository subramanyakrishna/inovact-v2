import React from 'react'

function Image(props: any) {
    return (
        <div className="edit-project-image-container">
            <button onClick={()=>{props.removeImage(props.image)}}>&times;</button>
            <img src={props.image} alt="pic"className="edit-project-image"/>
        </div>
    )
}

export default Image;
