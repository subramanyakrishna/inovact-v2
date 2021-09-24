import React from 'react'

function UploadDocuments(props:any) {
    return (
        <div className="modal_main">
        <div className="modal_cover">
            <button className="close-modal" onClick={props.closeModal} >&times;</button>
            <label className="modal_cover-title">Add Document</label>
            <div className="modal_part_one">
                <div className="modal_part_one-title">
                    <label >Title</label>    
                     <input type="text" placeholder="Give your project a suitable title"/>
                    <div>
                        <input type="file" id="upload-media-input" hidden/>
                        <div className="upload-media-div">
                             <label className="text-color-green upload-media-text text-align-center" htmlFor="upload-media-input">Browse For Files</label>
                        </div>
                    </div>
                </div>
            </div>
            
                <button className="modal_cover-post-btn--blue">Upload Document</button>
          
        </div>
    </div>
    )
}

export default UploadDocuments;