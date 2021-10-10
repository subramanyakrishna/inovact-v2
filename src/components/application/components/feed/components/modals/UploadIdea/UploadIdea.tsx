import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { handleAddIdeaChange, handleAddProjectChange } from 'StateUpdateHelper';
import useRequests from 'useRequest/useRequest';
import ModalContent from './components/ModalContent';

function UploadIdea(props:any) {
    const addIdea = useSelector(((state: any)=>state.addIdea));
    const { doRequest, errors } = useRequests({
        route: "idea",
        method: "post",
        body: {
            ...addIdea,
        },
        onSuccess: (data: any)=> {
            handleAddIdeaChange("idea_clear_data", "");
        }
    });
    const addTheIdea = ()=>{
        props.closeModal();
        doRequest();
    }
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Idea</label>
                <div className="modal_content">
                    <ModalContent/>
                    <div className="modal_cover-post-btn">
                        <button onClick={addTheIdea}>Post</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UploadIdea;
