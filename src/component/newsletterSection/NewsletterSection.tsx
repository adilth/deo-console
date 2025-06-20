import React, { useState } from "react";
import styles from "./NewsletterSection.module.css";
import newsletterImg from "../../assets/png/newsletter-image.png";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Email invalide");
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setError("");
    // Here you would send the email to your newsletter service
  };

  return (
    <section className={`${styles.newsletterWrapper} container`}>
      <div className={styles.newsletterContent}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Newsletter</h2>
          <p className={styles.desc}>
            Abonnez-vous dès maintenant à notre newsletter et vous recevrez les dernières
            actualités.
          </p>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Addresse Mail"
              value={email}
              onChange={handleChange}
              className={styles.input}
            />
            {error && <span className={styles.error}>{error}</span>}
            <button className={styles.submitBtn} type="submit">
              Souscrire
            </button>
            {success && (
              <div className={styles.success}>Merci pour votre inscription !</div>
            )}
          </form>
        </div>
        <div className={styles.right}>
          <img src={newsletterImg} alt="Newsletter" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
