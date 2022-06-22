import { useState } from "react";
import TourDate from "./tour-date/TourDate";
import styles from "./single-tour.module.scss";

const SingleTour = (props) => {
  const [distance, setDistance] = useState(props.distance);

  const increaseDistance = () => {
    setDistance(distance + 1);
  };

  return (
    <div className={styles['single-tour']}>
      <TourDate tourDate={props.date} />
      <div className={styles['single-tour-description']}>
        <div className={styles['single-tour-route']}>
          <h2>{props.startPoint}</h2>
          <h2>{props.endPoint}</h2>
        </div>
        <div className={styles['single-tour-distance']} onClick={increaseDistance}>
          {distance} km
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
