import styles from "./FondateurSection.module.css";
import jamalImg from "../../assets/png/jamal-image-bio.png";

const bio = `Jamal Belahrach est diplômé de l'Université de Saint-Denis, du programme Top Management de l'INSEAD Fontainebleau et du programme de Management Général Avancé d'HEC Executive, Jouy-en-Josas. En 1997, Jamal Belahrach lance les activités de Manpower, multinationale mondiale, en tant que Directeur Général du Maroc, puis en 2000 en Tunisie et en 2004, il devient président Manpower Maghreb (Maroc et Tunisie) et DOM-TOM (Antilles, Océan Indien, Nouvelle Calédonie), filiales existantes de Manpower France. Il rejoint Deo Conseil International en tant que CEO en 2019.\nMilitant sur les questions de l'éducation, de la lutte contre le chômage au Maroc et sur les droits des salariés, Jamal Belahrach a initié la couverture maladie, la bancarisation pour les salariés temporaires et le projet de loi sur le travail temporaire. Sa principale ambition, accompagner les dirigeants et leurs organisations pour anticiper les mutations inévitables internes et externes.`;

const FondateurSection = () => (
  <section className={styles.FondateurWrapper}>
    <h2 className={styles.heading}>Mots Du Président</h2>
    <div className={styles.background}>
      <div className={`${styles.fondateurSection} container`}>
        <div className={styles.left}>
          <img src={jamalImg} alt="Jamal Belahrach" className={styles.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.bio}>{bio}</div>
        </div>
      </div>
    </div>
  </section>
);

export default FondateurSection;
