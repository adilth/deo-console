import styles from "./HeroSection.module.css";
import heroImg from "../../assets/png/hero-section-image.png";

const HeroSection = () => (
  <>
    <div className={styles.heroBg}></div>
    <section className={`${styles.heroSection} container`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>People First</h1>
        <p className={styles.description}>
          Convaincus que la création de valeur est une co-construction avec le capital
          humain d'une organisation publique ou privée, DEO Conseil a pour raison d'être
          de faire grandir les hommes et les organisations en donnant du sens à toutes les
          parties prenantes.
        </p>
        <a href="#catalogue" className={styles.ctaBtn}>
          Notre Calatogue
        </a>
      </div>
      <div className={styles.heroImageWrapper}>
        <img src={heroImg} alt="People working together" className={styles.heroImage} />
        {/* <img src={bgImg} alt="Background" className={styles.bgImage} /> */}
      </div>
    </section>
  </>
);

export default HeroSection;
