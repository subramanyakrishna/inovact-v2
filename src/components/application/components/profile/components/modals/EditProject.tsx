import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { handleAddProjectChange } from 'StateUpdateHelper'
import useRequests from 'useRequest/useRequest'
import ModalPart1 from './components/components copy/ModalPart1'
import ModalPart2 from './components/components copy/ModalPart2'

//Components

function EditProject(props: any) {
    const [projectCompleted, setProjectCompleted] = useState(false)
    const addProject = useSelector((state: any) => state.addProject)
    const { doRequest, errors } = useRequests({
        route: 'post',
        method: 'put',
        body: {
            ...addProject,
        },
        onSuccess: (data: any) => {
            console.log('The project has been updated: ', data)
            window.location.reload()
        },
    })
    const editTheProject = () => {
        props.closeModal()
        doRequest()
    }
    const toggleProjectCompletion = () => {
        setProjectCompleted(!projectCompleted)
    }
    const projectData = useSelector(
        (state: any) =>
            state.userAllProjects.filter((project: any) => {
                if (project.id === props.id) {
                    return true
                }
            })[0]
    )
    console.log(projectData)
    const editProjectData = {
        id: projectData.id,
        user_id: projectData.user_id,
        team_id: null,
        required_roles: [],
        project_tags: projectData.tags,
        project_status: projectData.status,
        documents: projectData.images,
        title: projectData.title,
        description: projectData.description,
        mentions: [17, 26],
    }
    useEffect(() => {
        handleAddProjectChange('project_add_data', editProjectData)
    }, [])
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>
                    &times;
                </button>
                <label className="modal_cover-title">Edit Project</label>
                <div className="modal_content">
                    <ModalPart1 projectData={editProjectData} />
                    <ModalPart2
                        projectCompletion={toggleProjectCompletion}
                        projectCompleted={projectCompleted}
                        projectData={editProjectData}
                    />
                    <div className="modal_cover-post-btn">
                        <button onClick={editTheProject}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProject
