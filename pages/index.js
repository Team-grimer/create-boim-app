import styles from "../styles/Main.module.css";
import "../styles/global.css";

function Main() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>Create your boim project</div>
      <div>
        <img className={styles.appLogo} src="../public/logo.png" alt="logo" />
      </div>
    </div>
  );
}

export default Main;
