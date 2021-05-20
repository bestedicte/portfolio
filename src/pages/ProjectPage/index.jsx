import { Link } from 'react-router-dom';
import TextArea from '../../components/TextArea';
import Buttons from '../../components/Buttons';
import Footer from '../../components/Footer';
import ProjectImageSection from '../../components/ProjectImageSection';
import { ReactComponent as Home } from '../../assets/home.svg';
import { data } from '../../data/data';
import './style.css';

const ProjectPage = ({ project, projectIndex }) => (
  <div className="project-page">
    <Link to="/">
      <Home />
    </Link>
    <TextArea
      title={project.title}
      netlifyLink={project.netlifyLink}
      githubLink={project.githubLink}
      body={project.textarea1}
    />
    <ProjectImageSection
      image={project.image}
    />
    <TextArea
      body={project.textarea2}
    />
    <ProjectImageSection
      image={project.image2}
    />
    <Buttons
      nextProject={data[projectIndex + 1]}
      previousProject={data[projectIndex - 1]}
    />
    <Footer />
  </div>
);

export default ProjectPage;
