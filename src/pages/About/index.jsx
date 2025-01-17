// src/pages/About/index.jsx
/**
 * Renders the "About" page, featuring a hero section and expandable content.
 *
 * ### Key Features:
 * - **Hero Section**: Utilizes the `Hero` component to display a prominent background image with overlay support.
 * - **Data Fetching**: Leverages the `useFetch` hook to dynamically retrieve features data (titles and content).
 * - **Compound Component Pattern**: Integrates the `Collapse` component, 
 * which employs `Trigger` and `Content` sub-components to structure expandable sections.
 *
 * @returns {JSX.Element} JSX for the "About" page.
 */

import Hero from "../../components/Hero";
import HeroBgImage from "../../assets/about-hero-bg-image.jpg";
import Collapse from "../../components/Collapse";
import useFetch from "../../hooks/useFetch";
import styles from "./About.module.scss";

const About = () => {
  /**
   * Fetches feature data for the "About" page.
   *
   * @constant
   * @type {{ data: Array<{ title: string, content: string }>, loading: boolean, error: string }}
   */
  const { data, loading, error } = useFetch("local", "about");

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <Hero image={HeroBgImage} overlayOpacity={0.4} />
      <div className={styles.about}>
        {data.map((item) => (
          <div key={item.title} className={styles.about__feature}>
            <div className={styles.collapseWrapper}>
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
};

export default About;
