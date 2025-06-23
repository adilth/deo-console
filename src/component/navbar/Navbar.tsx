import styles from "./Navbar.module.css";
import logo from "../../assets/png/logo.png";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Nos Missions", href: "#missions" },
  { label: "Pourquoi Nous ?", href: "#pourquoi" },
  { label: "Nos Compétences", href: "#competences" },
  { label: "La Fabrik RH", href: "#fabrik" },
  { label: "Le Blog DEO", href: "#blog" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close menu on link click
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
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
      <button
        className={styles.hamburger}
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
      </button>
      {/* Overlay */}
      <div
        className={styles.mobileMenuOverlay}
        style={{ display: menuOpen ? "block" : "none" }}
      />
      {/* Mobile Menu */}
      <aside
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        ref={menuRef}
        aria-hidden={!menuOpen}
        tabIndex={-1}
      >
        <button
          className={styles.closeBtn}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.contactBtn} onClick={handleLinkClick}>
          Contact
        </a>
      </aside>
    </nav>
  );
};

export default Navbar;
