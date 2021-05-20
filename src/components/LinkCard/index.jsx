import './style.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

const LinkCard = ({
  imageUrl, title, index, slug,
}) => (
  <div className={`link-card frame-${index}`}>
    <Link to={slug} className="image-title">
      <img src={imageUrl.default} alt={title} />
      {title}
      <Arrow />
    </Link>
  </div>
);

export default LinkCard;
