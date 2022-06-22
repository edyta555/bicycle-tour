import styles from "./new-tour.module.scss";

import NewTourForm from "./new-tour-form/NewTourForm";

const NewTour = ({onSaveTourData}) => {

  return (
    <div className={styles['new-tour']}>
      <NewTourForm onSaveTourData={onSaveTourData} />
    </div>
  );
};

export default NewTour;
