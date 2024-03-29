import { useState } from "react";
import styles from "./new-tour-form.module.scss";

const NewTourForm = ({ onSaveTourData }) => {
  const initialInputData = {
    startPoint: "",
    stopPoint: "",
    distance: "",
    date: "",
  };

  const [enteredData, setEnteredData] = useState({ ...initialInputData });

  const enteredDataChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredData((prevState) => {
      return { ...prevState, [event.target.name]: newValue };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const saveData = {
      startPoint: enteredData.startPoint,
      endPoint: enteredData.stopPoint,
      tourDistance: parseInt(enteredData.distance),
      tourDate: new Date(enteredData.date),
      id: Math.random().toString(),
    };
    setEnteredData({ ...initialInputData });
    onSaveTourData(saveData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['form-fields']}>
        <div className={styles['form-field']}>
          <label>
            Start point:
            <input
              type="text"
              minLength="1"
              name="startPoint"
              value={enteredData.startPoint}
              onChange={enteredDataChangeHandler}
            />
          </label>
        </div>
        <div className={styles['form-field']}>
          <label>
            End point:
            <input
              type="text"
              minLength="1"
              name="stopPoint"
              value={enteredData.stopPoint}
              onChange={enteredDataChangeHandler}
            />
          </label>
        </div>
        <div className={styles['form-field']}>
          <label>
            Distance:
            <input
              type="number"
              min="1"
              step="1"
              name="distance"
              value={enteredData.distance}
              onChange={enteredDataChangeHandler}
            />
          </label>
        </div>
        <div className={styles['form-field']}>
          <label>
            Date:
            <input
              type="date"
              min="2018-01-01"
              max="2022-12-21"
              name="date"
              value={enteredData.date}
              onChange={enteredDataChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className={styles['form-button']}>
        <button type="submit">Add tour</button>
      </div>
    </form>
  );
};

export default NewTourForm;
