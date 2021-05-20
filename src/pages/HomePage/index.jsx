import './style.css';

import ImageSection from '../../components/ImageSection';
import TextArea from '../../components/TextArea';
import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const HomePage = () => (
  <div className="homepage">
    <Header />
    <ImageSection />
    <TextArea
      title="Aspiring, self-taught front-end web developer"
      body="24 years old, based in Oslo, Norway"
    />
    <AboutMe />
    <Footer />
  </div>
);

export default HomePage;
