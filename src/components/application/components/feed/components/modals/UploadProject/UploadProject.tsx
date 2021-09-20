import React, { useState } from 'react';
import ModalPart1 from './components/ModalPart1';
import ModalPart2 from './components/ModalPart2';

//Components

function UploadProject(props: any) {
    const [projectCompleted, setProjectCompleted] = useState(false);

    const toggleProjectCompletion = () =>{
        setProjectCompleted(!projectCompleted);
    }

    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Project</label>
                <div className="modal_content">
                    <ModalPart1 />
                    <ModalPart2 projectCompletion={toggleProjectCompletion} projectCompleted={projectCompleted}/>
                    <div className="modal_cover-post-btn">
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadProject;
