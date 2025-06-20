import React from "react";
import styles from "./PartnersSection.module.css";
import bmciLogo from "../../assets/png/bmci-logo.png";
import madaefLogo from "../../assets/png/madaef-groupe-logo.png";
import renaultLogo from "../../assets/png/groupe-renault-logo.png";

const PartnersSection = () => {
  return (
    <section className={styles.partnerWrapper}>
      <div className={`${styles["partners-section"]} container`}>
        <h2 className={styles["partners-title"]}>Ils Nous Font Confiance !</h2>
        <div className={styles["partners-logos"]}>
          <div>
            <img
              src={bmciLogo}
              alt="BMCI Groupe BNP Paribas"
              className={styles["partner-logo"]}
            />
          </div>
          <div>
            <img
              src={madaefLogo}
              alt="Madaef Groupe CDG"
              className={styles["partner-logo"]}
            />
          </div>
          <div>
            <img
              src={renaultLogo}
              alt="Groupe Renault"
              className={styles["partner-logo"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
