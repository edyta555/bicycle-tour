import { useState } from "react";
import TourDate from "./tour-date/TourDate";
import "./single-tour.css";

const SingleTour = (props) => {
  const [distance, setDistance] = useState(props.distance);

  const increaseDistance = () => {
    setDistance(distance + 1);
  };

  return (
    <div className="single-tour">
      <TourDate tourDate={props.date} />
      <div className="single-tour-description">
        <div className="single-tour-route">
          <h2>{props.startPoint}</h2>
          <h2>{props.endPoint}</h2>
        </div>
        <div className="single-tour-distance" onClick={increaseDistance}>
          {distance} km
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
