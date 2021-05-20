import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ProjectPage from './pages/ProjectPage';
import HomePage from './pages/HomePage';
import { data } from './data/data';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        {
          data.map((project, index) => (
            <Route path={project.slug}>
              <ProjectPage project={project} projectIndex={index} target="_blank" />
            </Route>
          ))
        }

      </div>
    </Router>
  );
}

export default App;
