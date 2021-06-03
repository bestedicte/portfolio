import './style.css';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

const Footer = () => (
  <div className="footer">
    <div className="link">
      <a href="https://github.com/bestedicte">Github</a>
      <Arrow />
    </div>
    <div className="link">
      <a href="https://www.linkedin.com/in/benedicte-vikvam-7b1959199/">LinkedIn</a>
      <Arrow />
    </div>
  </div>
);

export default Footer;
