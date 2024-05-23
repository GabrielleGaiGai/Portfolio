import { useGetProjectsQuery, useDeleteProjectMutation } from "../api/apiSlice";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import './Projects.css'

const ProjectList = () => {
    const [deleteProject] = useDeleteProjectMutation()

    const { data: projects, isFetching, isSuccess, isError, error } = useGetProjectsQuery()

    let renderedProjects;
    if (isFetching) {
        renderedProjects = <h1>Loading...</h1>
    } else if (isError) {
        renderedProjects = <h1>{error}</h1>
    } else if (isSuccess) {
        renderedProjects = projects.map(project => (
            <article key={project._id} className="project__article">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__content">{project.summary.substring(0, 100)}</p>
                <div className="project__links">
                    <Link to={`/project/${project._id}`} className="project__link">
                        View Project
                    </Link>
                    <Link to={`/editproject/${project._id}`} className="project__link">
                        Edit Project
                    </Link>
                    <button type="button" className="project__link" onClick={() => deleteProject({id: project._id}).unwrap()} >
                        Delete Post
                    </button>
                </div>
            </article>
        ))
    }
    

    return (
        <main>
            <h1>
                ProjectList
            </h1>

            <AddProject />
            {renderedProjects}
        </main>
    )
}
export default ProjectList