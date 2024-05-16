import { Routes, Route } from 'react-router-dom'
import Layout from './componenets/layout/Layout';
import Main from './componenets/Main';
import ProjectList from './features/projects/ProjectList';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="projects" element={<ProjectList />}></Route>
      </Route>

    </Routes>
  );
}

export default App;

