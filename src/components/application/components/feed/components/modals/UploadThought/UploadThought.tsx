import React from 'react'
import { useSelector } from 'react-redux';
import { handleAddThoughtChange } from 'StateUpdateHelper';
import useRequests from 'useRequest/useRequest';

function UploadThought(props:any) {
    const thoughtData = useSelector((state: any)=>state.addThought);
    const { doRequest, errors } = useRequests({
        route: "thoughts",
        method: "post",
        body: {
            ...thoughtData,
        },
        onSuccess: (data: any)=> {
            console.log(data)
            handleAddThoughtChange("thought_clear_data", "");
        }
    });
    const addTheThought = async(e:any)=>{
        e.preventDefault();
        props.closeModal();
        await doRequest();
        window.location.reload();
    }
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Thought</label>
                <div className="modal_part_one">
                    <div className="modal_part_one-description">
                        <label >Thought Description</label>
                        <textarea placeholder="What's on your mind?" onChange={(e: any)=>handleAddThoughtChange("description", e.target.value)}/>
                    </div>
                </div>
                <div className="modal_cover-post-btn">
                    <button onClick={addTheThought}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default UploadThought;
