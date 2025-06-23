import styles from "./LaFabrikSection.module.css";
import headerImg from "../../assets/png/header-la-fabrik-rh.png";
import leadingTipsImg from "../../assets/png/leading-tips.png";
import insightsImg from "../../assets/png/insights.png";
import vucaTalksImg from "../../assets/png/vuca-talks.png";
import llianceXpertImg from "../../assets/png/lliance-xpert.png";

const LaFabrikSection = () => {
  return (
    <section className={`${styles["lafabrik-section"]} container`}>
      <img src={headerImg} alt="La Fabrik RH" className={styles["lafabrik-header"]} />
      <h2 className={styles["lafabrik-title"]}>
        Le think tank de Deo Conseil au service de la réflexion et de l'action.
      </h2>
      <p className={styles["lafabrik-desc"]}>
        Avec La Fabrik RH, nous traitons régulièrement de sujets divers, publiés sous
        différents formats pour prendre des initiatives et mener des études sur des sujets
        d'entreprise dans le contexte marocain.
      </p>
      <div className={styles["lafabrik-cards"]}>
        <div className={styles["lafabrik-card"]}>
          <img src={leadingTipsImg} alt="Leading Tips" />
          <p>
            Des verbatims et citations sur des sujets de management et d'accompagnement en
            entreprise.
          </p>
        </div>
        <div className={styles["lafabrik-card"]}>
          <img src={insightsImg} alt="Insights" />
          <p>
            Des dossiers et des enquêtes qui se penchent sur des sujets d'actualité
            stratégique.
          </p>
        </div>
        <div className={styles["lafabrik-card"]}>
          <img src={vucaTalksImg} alt="Vuca Talks" />
          <p>
            Des vidéos traitant de thématiques et de problématiques RH, managériales, et
            plus largement ayant trait à l'entreprise et son organisation.
          </p>
          <p className={styles.smallText}>
            VUCA : Volatile Uncertain Complex & Ambiguous
          </p>
        </div>
        <div className={styles["lafabrik-card"]}>
          <img src={llianceXpertImg} alt="Lliance Xpert" />
          <p>
            Un regroupement d'experts du domaine pour réfléchir ensemble sur notre façon
            d'agir et mieux appréhender notre société VUCA.
          </p>
          <p className={styles.smallText}>
            VUCA : Volatile Uncertain Complex & Ambiguous
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaFabrikSection;
