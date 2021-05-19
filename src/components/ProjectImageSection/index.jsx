const ProjectImageSection = ({ image, title }) => (
  <div className="project-image-section">
    <img src={image.default} alt={title} />
    <p className="image-title">
      {title}
    </p>
  </div>
);

export default ProjectImageSection;
