import styles from "../../styles/Home.module.css";

/* Creating dynamic components */
const Card = (props) => {
  return (
    <a href={props.href} className={styles.card}>
      <h3>{props.title} &rarr;</h3>
      <p>{props.description}</p>
    </a>
  );
};

export { Card };
