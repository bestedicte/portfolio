import './style.css';
import TextArea from '../TextArea';
import portrait from '../../assets/Benedicte.jpg';

const AboutMe = () => (
  <div className="about-me">
    <img src={portrait} alt="" className="portrait" />
    <div className="text-area-wrapper">
      <TextArea
        title="Harvard X"
        body="CS50"
        year="2020"
      />
      <TextArea
        title="Udemy"
        body="The Complete Web Developer: Zero To Mastery"
        year="2020"
      />
      <TextArea
        title="Udemy"
        body="JavaScript: The Advanced Concepts"
        year="2020"
      />
      <TextArea
        title="Udemy"
        body="Complete React Developer"
        year="2021"
      />
    </div>
  </div>
);

export default AboutMe;
