// src/pages/About/index.jsx
import Hero from "../../components/Hero";
import HeroBgImage from "../../assets/about-hero-bg-image.jpg";
import Collapse from "../../components/Collapse";
import useFetch from "../../hooks/useFetch";
import styles from "./About.module.scss";


const About = () => {
  const { data, loading, error } = useFetch("local","about");

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <>
      <Hero image={HeroBgImage} overlayOpacity={0.4} />
      <div className={styles.about}>
        {data.map((item) => (
          <div key={item.title} className={styles.about__feature}>
            <div className={styles.collapseWrapper}> {/* This is the wrapper div */}
              <Collapse>
                <Collapse.Trigger>{item.title}</Collapse.Trigger>
                <Collapse.Content>{item.content}</Collapse.Content>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;