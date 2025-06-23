import styles from "./FooterSection.module.css";
import footerLogo from "../../assets/png/fotter-logo.png";
import facebookIcon from "../../assets/svg/facebook.svg";
import instagramIcon from "../../assets/svg/bxl-instagram-alt.svg";
import twitterIcon from "../../assets/svg/twitter.svg";
import { LocationIcon, PhoneIcon, MessageIcon } from "../../assets/IconsSvg";

const FooterSection = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.left}>
          <img src={footerLogo} alt="DEO Conseil" className={styles.logo} />
        </div>
        <div className={styles.center}>
          <nav className={styles.navLinks}>
            <a href="#missions">Nos Missions</a>
            <a href="#pourquoi">Pourquoi Nous ?</a>
            <a href="#competences">Nos Compétences</a>
            <a href="#lafabrik">La Fabrik RH</a>
            <a href="#blog">Le Blog Deo</a>
          </nav>
          <div className={styles.contactInfo}>
            <div>
              <LocationIcon /> 10, Rue Jihani - 4ème Étage Casablanca - Maroc
            </div>
            <div>
              <PhoneIcon /> +212 (0)5 22 94 42 74 / +212 (0)5 22 94 42 77
            </div>
            <div>
              <MessageIcon /> contact@deoconseil.com
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.newsletterBox}>
            <div className={styles.newsletterTitle}>
              Abonnez-vous dès maintenant à notre newsletter et vous recevrez les
              dernières actualités.
            </div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Addresse Mail" className={styles.input} />
              <button className={styles.submitBtn} type="submit">
                Souscrire
              </button>
            </form>
          </div>
          <div className={styles.socials}>
            <span>Suivez Nous</span>
            <div className={styles.icons}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
