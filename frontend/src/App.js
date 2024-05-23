import { Routes, Route } from 'react-router-dom'
import Layout from './componenets/layout/Layout';
import Main from './componenets/Main';
import ProjectList from './features/projects/ProjectList';
import SingleProject from './features/projects/SingleProject';
import EditProject from './features/projects/EditProject';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="projects" element={<ProjectList />}></Route>
        <Route path="project/:projectId" element={<SingleProject />}></Route>
        <Route path="editproject/:projectId" element={<EditProject />}></Route>
      </Route>




    </Routes>
  );
}

export default App;

