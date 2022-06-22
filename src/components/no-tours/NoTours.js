import styles from "./no-tours.module.scss";

const NoTours = () => {
  return (
    <div className={styles["no-tours-container"]}>
      <p className={styles["no-tours-info"]}>No tours.</p>
    </div>
  );
};

export default NoTours;
