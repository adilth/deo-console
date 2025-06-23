import styles from "./BlogsSection.module.css";
import blogOneImg from "../../assets/png/blog-one-le-monde-vuca.png";
import blogTwoImg from "../../assets/png/blog-two-comment-reengager.png";
import blogThreeImg from "../../assets/png/blog-three-ledito-de-zineb.png";
import jamalImg from "../../assets/png/blogwriter.png";

const BlogsSection = () => {
  return (
    <section className={`${styles["blogs-section"]} container`}>
      <h2 className={styles["blogs-title"]}>Le Blog DEO</h2>
      <div className={styles["blogs-cards"]}>
        <div className={styles["blog-card"]}>
          <img src={blogOneImg} alt="Le monde VUCA" className={styles["blog-img"]} />
          <div className={styles["blog-meta"]}>
            <img
              src={jamalImg}
              alt="Jamal Belahrach"
              className={styles["blog-author-img"]}
            />
            <div>
              <div className={styles["blog-author"]}>Jamal Belahrach</div>
              <div className={styles["blog-date"]}>30 août 2022</div>
            </div>
          </div>
          <h3 className={styles["blog-card-title"]}>
            Le monde VUCA, de quoi parle-t-on ?
          </h3>
          <p className={styles["blog-card-desc"]}>
            “Nous sommes résolument entrés dans une nouvelle ère” – Jamal Belahrach, Ceo
            Deo Conseil, aborde aujourd'hui ce que les gens de ce monde VUCA, incertain
            (de l'anglais Uncertainty), Complexe et Ambigu, auquel nous devons faire face.
          </p>
        </div>
        <div className={styles["blog-card"]}>
          <img
            src={blogTwoImg}
            alt="Comment réengager les collaborateurs après la pandémie ?"
            className={styles["blog-img"]}
          />
          <div className={styles["blog-meta"]}>
            <img
              src={jamalImg}
              alt="Jamal Belahrach"
              className={styles["blog-author-img"]}
            />
            <div>
              <div className={styles["blog-author"]}>Jamal Belahrach</div>
              <div className={styles["blog-date"]}>30 août 2022</div>
            </div>
          </div>
          <h3 className={styles["blog-card-title"]}>
            Comment réengager les collaborateurs après la pandémie ?
          </h3>
          <p className={styles["blog-card-desc"]}>
            Dans un environnement de plus en plus changeant, la question est plus que
            d'actualité. Notre expert Jamal Belahrach analyse la problématique sous tous
            les angles et appelle les entreprises à prendre conscience de ce type de
            management et d'outils à avoir aujourd'hui pour relancer les activités.
          </p>
        </div>
        <div className={styles["blog-card"]}>
          <img
            src={blogThreeImg}
            alt="L'édito de Zineb Benabdejlil : Les leaders engagés"
            className={styles["blog-img"]}
          />
          <div className={styles["blog-meta"]}>
            <img
              src={jamalImg}
              alt="Jamal Belahrach"
              className={styles["blog-author-img"]}
            />
            <div>
              <div className={styles["blog-author"]}>Jamal Belahrach</div>
              <div className={styles["blog-date"]}>30 août 2022</div>
            </div>
          </div>
          <h3 className={styles["blog-card-title"]}>
            L'édito de Zineb Benabdejlil : Les leaders engagés
          </h3>
          <p className={styles["blog-card-desc"]}>
            Nous nous sommes retrouvés un jour à rêver d'un monde meilleur. Un monde où…
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
