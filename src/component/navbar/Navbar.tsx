import styles from "./Navbar.module.css";
import logo from "../../assets/png/logo.png";

const navLinks = [
  { label: "Nos Missions", href: "#missions" },
  { label: "Pourquoi Nous ?", href: "#pourquoi" },
  { label: "Nos Compétences", href: "#competences" },
  { label: "La Fabrik RH", href: "#fabrik" },
  { label: "Le Blog DEO", href: "#blog" },
];

const Navbar = () => (
  <nav className={`${styles.navbar} container`}>
    <div>
      <img src={logo} alt="DEO Conseil Logo" className={styles.logo} />
    </div>
    <ul className={styles.navLinks}>
      {navLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    <a href="#contact" className={styles.contactBtn}>
      Contact
    </a>
  </nav>
);

export default Navbar;
