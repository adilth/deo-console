import styles from "./MissionsSection.module.css";
import nosMissionsImg from "../../assets/png/nos-missions.png";
import {
  TriaingleEarth,
  TriaingleEye,
  TriaingleGroupePeople,
  TriainglePiecePizzle,
  TriaingleHands,
  TriaingleDigital,
} from "../../assets/IconsSvg";

const missions = [
  {
    icon: <TriaingleEarth />,
    text: "Connecter les dirigeants aux enjeux du monde et de leur environnement.",
  },
  {
    icon: <TriaingleEye />,
    text: "Aligner le top management sur la vision et le projet.",
  },
  {
    icon: <TriaingleGroupePeople />,
    text: "Créer un référentiel commun entre le management et les équipes (Culture d'entreprise).",
  },
  {
    icon: <TriainglePiecePizzle />,
    text: "Adapter la stratégie pour anticiper les mutations.",
  },
  {
    icon: <TriaingleHands />,
    text: "Mettre le capital humain au cœur de la stratégie.",
  },
  {
    icon: <TriaingleDigital />,
    text: "Intégrer le digital comme levier de transformation culturelle et opérationnelle.",
  },
];

const MissionsSection = () => (
  <section className={`${styles.missionWrapper}`}>
    <div className={`${styles.missionsSection} container`}>
      <div className={styles.imageWrapper}>
        <img src={nosMissionsImg} alt="Nos Missions" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Créé en 2002, DEO Conseil a pour ambition d'accompagner les organisations dans
          leur performance durable
        </h2>
        <div className={styles.missionsGrid}>
          {missions.map((mission, idx) => (
            <div className={styles.missionItem} key={idx}>
              <div className={styles.icon}>{mission.icon}</div>
              <div className={styles.text}>{mission.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MissionsSection;
