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
      title="Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers."
      body="Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground."
    />
    <AboutMe />
    <Footer />
  </div>
);

export default HomePage;
