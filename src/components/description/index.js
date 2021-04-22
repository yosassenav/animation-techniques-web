/*Dynamic Component! 
'props' stands for properties; a function in React is not a multiparameter function,
so it must receive one parameter (that parameter behaves as a object (?))
*/
import styles from "../../styles/Home.module.css";

const Description = (props) => {
  return <p className={styles.description}>{props.description}</p>;
};

export { Description };
