import { imageUploader } from 'imageUpload/imageUploader'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleAddProjectChange } from 'StateUpdateHelper'
import Image from './Image'
import ImageTag from './ImageTag'

function TeamNameDescription(props: any) {
    const addProject = useSelector((state: any) => state.addProject)
    const loadFile = async (e: any) => {
        imageUploader(e.target.files).then((data: any) => {
            handleAddProjectChange('documents', [
                ...addProject.documents,
                ...data.map((img: any) => img.url),
            ])
        })
    }
    const removeImage = (image: any) => {
        handleAddProjectChange(
            'documents',
            addProject.documents.filter((ele: any) => ele !== image)
        )
    }
    // const [allImages, setAllImages] = useState<string[]>([]);
    return (
        <div className="modal_part_one-team-description">
            <div className="modal_part_one-title">
                <label>Project Title</label>
                <input
                    type="text"
                    placeholder="Give your project a suitable title"
                    value={addProject.title}
                />
            </div>
            <div className="modal_part_one-description">
                <label>Project Description</label>
                <textarea
                    placeholder="Describe your project"
                    value={addProject.description}
                    onChange={(e: any) =>
                        handleAddProjectChange('description', e.target.value)
                    }
                />
                <div>
                    <input
                        type="file"
                        id="upload-media-input"
                        hidden
                        onChange={loadFile}
                        multiple
                    />
                    <label
                        className="upload-media-btn"
                        htmlFor="upload-media-input"
                    >
                        Upload Media
                    </label>
                </div>
                <div className="modal_part_one-edit-photos">
                    {addProject.documents.map((image: any) => {
                        return <Image image={image} removeImage={removeImage} />
                    })}
                </div>
                {addProject.documents.map((file: any) => {
                    return <ImageTag name={file.name} />
                })}
            </div>
        </div>
    )
}

export default TeamNameDescription
