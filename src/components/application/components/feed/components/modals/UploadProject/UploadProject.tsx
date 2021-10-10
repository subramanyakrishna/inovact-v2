import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { handleAddProjectChange } from 'StateUpdateHelper';
import useRequests from 'useRequest/useRequest';
import ModalPart1 from './components/ModalPart1';
import ModalPart2 from './components/ModalPart2';

//Components

function UploadProject(props: any) {
    const [projectCompleted, setProjectCompleted] = useState(false);
    const appProjectData = useSelector((state: any)=> state.addProject);
    const { doRequest, errors } = useRequests({
        route: "post",
        method: "post",
        body: {
            ...appProjectData,
        },
        onSuccess: (data: any)=> {
            handleAddProjectChange("project_clear_data", "");
            props.closeModal();
        }
    });
    
    const toggleProjectCompletion = () =>{
        setProjectCompleted(!projectCompleted);
    }

    const addTheProject = async(e: any)=>{
        e.preventDefault();
        await doRequest();
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
                        <button onClick={addTheProject}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadProject;
