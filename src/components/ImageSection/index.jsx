import './style.css';

import LinkCard from '../LinkCard';
import { data } from '../../data/data';

const ImageSection = () => (
  <div className="image-section">
    {
          data.map((project, index) => (
            <LinkCard
              title={project.title}
              index={index}
              imageUrl={project.image}
              slug={project.slug}
              key={project.title}
            />
          ))
      }
  </div>
);

export default ImageSection;
