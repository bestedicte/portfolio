import { Link } from 'react-router-dom';
import './style.css';

const Buttons = ({ nextProject, previousProject }) => (
  <div className="buttons">
    { previousProject
    && (
    <Link
      to={previousProject.slug}
      className="button previous"
    >
      Previous
    </Link>
    )}
    { nextProject
    && (
    <Link
      to={nextProject.slug}
      className="button next"
    >
      Next
    </Link>
    )}
  </div>
);

export default Buttons;
