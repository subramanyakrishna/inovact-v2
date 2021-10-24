import { imageUploader } from 'imageUpload/imageUploader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { handleAddProjectChange } from 'StateUpdateHelper';
import ImageTag from "./ImageTag";
import Image from '../../../../../profile/components/modals/components/components copy/Image';
function TeamNameDescription() {
    const loadFile = async(e: any)=>{
        imageUploader(e.target.files).then((data: any)=>{
            handleAddProjectChange("documents", data);
        });
    }
    const addProject = useSelector((state: any)=> state.addProject);
    // const [allImages, setAllImages] = useState<string[]>([]);
    return (
        <div className="modal_part_one-team-description">
            <div className="modal_part_one-title">
                <label >Project Title</label>
                <input type="text" placeholder="Give your project a suitable title" onChange={(e: any)=>handleAddProjectChange("title", e.target.value)}/>
            </div>
            <div className="modal_part_one-description">
                <label >Project Description</label>
                <textarea placeholder="Describe your project" onChange={(e: any)=>handleAddProjectChange("description", e.target.value)}/>
                <div>
                    <input type="file" id="upload-media-input" hidden onChange={loadFile} multiple/>
                    <label className="upload-media-btn" htmlFor="upload-media-input">Upload Media</label>
                </div>
                <div className="modal_part_one-edit-photos">
                    {
                        addProject.documents.map((image: any)=>{
                            return <Image image={image.url} removeImage={()=>(null)}/>
                        })
                    }
                </div>
                {
                    addProject.documents.map((file: any)=>{
                        return <ImageTag name={file.name}/>
                    })
                }
            </div>
        </div>
    )
}

export default TeamNameDescription;
