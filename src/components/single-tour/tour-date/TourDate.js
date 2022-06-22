import styles from "./tour-date.module.scss";

const TourDate = (props) => {
  const tourDay = props.tourDate.toLocaleString("en-US", { day: "2-digit" });
  const tourMonth = props.tourDate.toLocaleString("en-US", { month: "long" });
  const tourYear = props.tourDate.getFullYear();

  return (
    <div className={styles['single-tour-date']}>
      <div className={styles['tour-day']}>{tourDay}</div>
      <div className={styles['tour-month']}>{tourMonth}</div>
      <div className={styles['tour-year']}>{tourYear}</div>
    </div>
  );
};

export default TourDate;
