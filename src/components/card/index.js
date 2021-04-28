import styles from "@/styles/Card.module.css";

/* Creating dynamic components */
const Card = (props) => {
  return (
    <a href={props.href} className={styles.card}>
      <h3 className={styles.h3}>{props.title} &rarr;</h3>
      <p className={styles.paragraph}>{props.description}</p>
    </a>
  );
};

export { Card };
