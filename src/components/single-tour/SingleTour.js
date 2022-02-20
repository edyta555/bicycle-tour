import './single-tour.css';

export const SingleTour = () => {
  return (
    <div className="single-tour">
      <div className="single-tour-data">May 12th 2021</div>
      <div className="single-tour-description">
        <div className="single-tour-route">
          <h2>Warsaw</h2>
          <h2>Marki</h2>
        </div>
        <div className="single-tour-distance">16km</div>
      </div>
    </div>
  );
};

export default SingleTour;
