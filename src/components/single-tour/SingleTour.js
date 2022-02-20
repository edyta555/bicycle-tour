import "./single-tour.css";

export const SingleTour = (props) => {
  return (
    <div className="single-tour">
      <div className="single-tour-date">{props.date.toISOString()}</div>
      <div className="single-tour-description">
        <div className="single-tour-route">
          <h2>{props.startPoint}</h2>
          <h2>{props.endPoint}</h2>
        </div>
        <div className="single-tour-distance">{props.distance} km</div>
      </div>
    </div>
  );
};

export default SingleTour;
