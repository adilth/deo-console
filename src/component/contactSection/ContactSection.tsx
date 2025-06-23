import { useState } from "react";
import styles from "./ContactSection.module.css";
import { LocationIcon, PhoneIcon, MessageIcon } from "../../assets/IconsSvg";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  job: "",
  message: "",
};

const validate = (values: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!values.firstName) errors.firstName = "Prénom requis";
  if (!values.lastName) errors.lastName = "Nom requis";
  if (!/^\d{10}$/.test(values.phone)) errors.phone = "Téléphone invalide";
  if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
    errors.email = "Email invalide";
  if (!values.company) errors.company = "Entreprise requise";
  if (!values.job) errors.job = "Fonction requise";
  if (!values.message) errors.message = "Message requis";
  return errors;
};

const ContactSection = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      // Here you would send the form data
    }
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={`container`}>
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.contactContent}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Prénom</label>
                <input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="Johne"
                />
                {errors.firstName && (
                  <span className={styles.error}>{errors.firstName}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label>Nom</label>
                <input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="dao"
                />
                {errors.lastName && (
                  <span className={styles.error}>{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Téléphone</label>
                <input
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="06xxxxxxxx"
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="johon-doa@gamail.com"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Entreprise</label>
                <input
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Qalqul"
                />
                {errors.company && <span className={styles.error}>{errors.company}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label>Fonction</label>
                <input
                  name="job"
                  value={values.job}
                  onChange={handleChange}
                  placeholder="Marketing"
                />
                {errors.job && <span className={styles.error}>{errors.job}</span>}
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="...."
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>
            <button className={styles.submitBtn} type="submit">
              Envoyer
            </button>
            {submitted && <div className={styles.success}>Message envoyé !</div>}
          </form>
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>
              Contactez notre équipe pour en savoir plus sur DEO Conseil
            </p>
            <div className={styles.infoItem}>
              <LocationIcon />
              <a
                href="https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8A"
                target="_blank"
                rel="noopener noreferrer"
              >
                10, Rue Jihani - 4ème Étage Casablanca - Maroc
              </a>
            </div>
            <div className={styles.infoItem}>
              <PhoneIcon />
              <a href="tel:+212522944274">+212 (0)5 22 94 42 74</a> /{" "}
              <a href="tel:+212522944277">+212 (0)5 22 94 42 77</a>
            </div>
            <div className={styles.infoItem}>
              <MessageIcon />
              <a href="mailto:contact@deoconseil.com">contact@deoconseil.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
