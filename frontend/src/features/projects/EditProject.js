
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useEditProjectMutation, useLazyGetProjectQuery } from "../api/apiSlice";

const EditProject = () => {
    const id = useParams().projectId;
    const navigate = useNavigate()

    const [editProject] = useEditProjectMutation()
    const [getProject] = useLazyGetProjectQuery(id)

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const fetchData = async () => {
        try {
            const project = await getProject(id).unwrap()
            setTitle(project.title)
            setSummary(project.summary)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])


    const onSaveProjectClicked = async () => {
        editProject({ id, title, summary }).unwrap()
        setTitle('')
        setSummary('')
        navigate(`/projects`)
    }

    return (
        <main>
            <h2>Edit Project</h2>
            <form className="project__form">
                <label htmlFor="projectTitle">Project Title:</label>
                <input type="text" id="projectTitle" name="projectTitle" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                <label htmlFor="projectContent">Summary:</label>
                <textarea id="projectContent" name="projectContent" value={summary} onChange={(e) => { setSummary(e.target.value) }} />

                <button type="button" className="project__button" onClick={onSaveProjectClicked} >
                    Save Post
                </button>
            </form>
        </main>
    )
}

export default EditProject