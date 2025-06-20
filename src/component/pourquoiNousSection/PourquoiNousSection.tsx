import styles from "./PourquoiNousSection.module.css";
import pqImg from "../../assets/png/pourqui-now-image.png";
import { TriangleSvg } from "../../assets/IconsSvg";

const reasons = [
  "Peer to Peer conversation pour comprendre vos enjeux et faire un focus sur la création de valeur.",
  "Un accompagnement de proximité avec un écosystème d'expertises.",
  "20 ans d'expérience dans l'accompagnement des dynamiques humaines.",
  "Expertise managériale et Ressources Humaines.",
  "Distributeur exclusif d'outils d'assessment de référence.",
];

const PourquoiNousSection = () => (
  <section className={styles.pourquoiWrapper}>
    <h2 className={styles.heading}>Pourquoi Nous ?</h2>
    <div className={styles.subtitle}>5 Raison pour travailler avec nous</div>
    <div className={`${styles.pourquoiSection} container`}>
      <div className={styles.left}>
        <ul className={styles.reasons}>
          {reasons.map((reason, idx) => (
            <li key={idx} className={styles.reasonItem}>
              <span className={styles.icon}>
                <TriangleSvg />
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <img src={pqImg} alt="Pourquoi nous" className={styles.image} />
      </div>
    </div>
  </section>
);

export default PourquoiNousSection;
