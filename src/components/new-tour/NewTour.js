import "./new-tour.css";

import NewTourForm from "./new-tour-form/NewTourForm";

const NewTour = ({onSaveTourData}) => {

  return (
    <div className="new-tour">
      <NewTourForm onSaveTourData={onSaveTourData} />
    </div>
  );
};

export default NewTour;
