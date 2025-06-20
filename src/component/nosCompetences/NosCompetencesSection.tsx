import { TriangleSvg } from "../../assets/IconsSvg";
import styles from "./NosCompetencesSection.module.css";

const competences = [
  {
    title: "Transformation des hommes et des organisations",
    items: [
      "Accompagnement à la mise en oeuvre de plateforme stratégique",
      "Alignement du top management",
      "Conduite de stratégie de transformation culturelle de l'entreprise",
      "Conduite de stratégie de transformation digitale",
      "Management de transition",
    ],
  },
  {
    title: "Conseil RH",
    items: [
      "Expérience collaborateur",
      "Plateforme de management du capital humain",
      "Digital workplace (Expérience digitale)",
      "Stratégie de travail à distance",
      "Marque employeur",
      "Marketing RH",
      "Baromètre social",
      "Développement du bien-être et de santé au travail (QVST)",
    ],
  },
  {
    title: "People Developement",
    items: [
      "Formation soft-skills",
      "Formations managériales & leadership",
      "Parcours de formations sur-mesure",
      "Digital Learning",
      "Création d'Académie d'entreprise",
      "Animation de conférences",
      "Conception et animation de webinaires thématiques",
      "Dispositif de formation « Phygital »",
    ],
  },
  {
    title: "Assessment & Coaching",
    items: [
      "Assessment individuel et collectif",
      "Coaching individuel & collectif",
      "Mise en place d'Assessment center",
      "Accompagnement au recrutement",
      "Repositionnement professionnel & Outplacement",
      "Organisation de convention & team building",
    ],
  },
];

const NosCompetencesSection = () => (
  <section className={styles.wrapperSection}>
    <div className={`${styles.competencesSection} container`}>
      <h2 className={styles.heading}>Nos Compétences</h2>
      <div className={styles.cardsGrid}>
        {competences.map((col) => (
          <div className={styles.card} key={col.title}>
            <div className={styles.cardTitle}>{col.title}</div>
            <ul className={styles.cardList}>
              {col.items.map((item, i) => (
                <li className={styles.cardListItem} key={i}>
                  <span className={styles.icon}>
                    <TriangleSvg />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NosCompetencesSection;
