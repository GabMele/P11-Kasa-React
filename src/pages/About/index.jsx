// src/pages/About/index.jsx
import Hero from "../../components/Hero";
import HeroBgImage from "../../assets/about-hero-bg-image.jpg";

function About() {
  return (
    <>
      <Hero image={HeroBgImage} overlayOpacity={0.4} />
      <div>
        <h1>A propos</h1>
        <p>Lorem ipsum</p>
      </div>
    </>
  );
}

export default About;