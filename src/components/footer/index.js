import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.anchor}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          className={styles.img}
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.logo}
        />
      </a>
    </footer>
  );
};

export { Footer };
