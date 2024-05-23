import { Link, useParams } from "react-router-dom";
import { useGetProjectQuery } from "../api/apiSlice";

const SingleProject = () => {
    const Id = useParams().projectId;
    const { data: project, isFetching } = useGetProjectQuery(Id)

    if (isFetching) {
        return (
            <main>
                <h2>Loading ...</h2>
            </main>
        )
    } else if (!project) {
        return (
            <main>
                <h2>Project not found!</h2>
            </main>
        )
    } else {
        return (
            <main>
                <Link to="/projects">Back</Link>
                <h1>
                    Project
                </h1>
                <article>
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                </article>
            </main>
        )
    }


}
export default SingleProject