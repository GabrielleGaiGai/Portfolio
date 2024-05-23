import { useState } from "react"
import { useAddProjectMutation } from "../api/apiSlice"

const AddProject = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')

  const [addProject] = useAddProjectMutation()

  const onSaveProjectClicked = () => {
    addProject({ title, summary }).unwrap()
    setTitle('')
    setSummary('')

  }

  return (
    <section>
      <h2>Add a New Project</h2>
      <form className="project__form">
        <label htmlFor="projectTitle">Project Title:</label>
        <input type="text" id="projectTitle" name="projectTitle" value={title} onChange={(e) => { setTitle(e.target.value) }} />

        <label htmlFor="projectContent">Content:</label>
        <textarea id="projectContent" name="projectContent" value={summary} onChange={(e) => { setSummary(e.target.value) }} />

        <button type="button" className="project__button" onClick={onSaveProjectClicked} >
          Save Post
        </button>
      </form>
    </section>
  )
}
export default AddProject