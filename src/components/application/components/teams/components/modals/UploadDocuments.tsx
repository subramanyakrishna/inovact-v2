import axios from 'axios'
import { documentUploader } from 'imageUpload/docsUploader'
import React from 'react'

function UploadDocuments(props: any) {
    const loadFile = (e: any) => {
        props.closeModal()
        if (e.target.files) {
            documentUploader(e.target.files).then(async (data: any) => {
                const docData = {
                    ...data[0],
                    team_id: props.team_id,
                }
                await axios({
                    method: 'POST',
                    url: 'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/documents',
                    data: docData,
                    headers: {
                        Authorization: localStorage.getItem('user'),
                    },
                })
                    .then((data: any) => {})
                    .catch((err) => {})
            })
        }
    }
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>
                    &times;
                </button>
                <label className="modal_cover-title">Add Document</label>
                <div className="modal_part_one">
                    <div className="modal_part_one-title">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Give your project a suitable title"
                        />
                        <div>
                            <input
                                type="file"
                                id="upload-media-input"
                                hidden
                                onChange={loadFile}
                            />
                            <div className="upload-media-div">
                                <label
                                    className="text-color-green upload-media-text text-align-center"
                                    htmlFor="upload-media-input"
                                >
                                    Browse For Files
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="modal_cover-post-btn--blue">
                    Upload Document
                </button>
            </div>
        </div>
    )
}

export default UploadDocuments
