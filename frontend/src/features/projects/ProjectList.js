import { useSelector } from "react-redux";
import { selectAllProjects } from "./projectsSlice";

const ProjectList = () => {
    const projects = useSelector(selectAllProjects)

    const renderedPosts = projects.map(project => (
        <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <div>
            ProjectList
            {renderedPosts}
        </div>
    )
}
export default ProjectList