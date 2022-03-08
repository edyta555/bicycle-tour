import { useState } from "react";
import "./new-tour-form.css";

const NewTourForm = () => {
  const [enteredData, setEnteredData] = useState({
    startPoint: "",
    stopPoint: "",
    distance: "",
    date: "",
  });

  const enteredDataChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredData((prevState) => {
      return { ...prevState, [event.target.name]: newValue };
    });
  };

  return (
    <form>
      <div className="form-fields">
        <div className="form-field">
          <label>
            Start point:
            <input
              type="text"
              name="startPoint"
              value={enteredData.startPoint}
              onChange={enteredDataChangeHandler}
            />
          </label>
        </div>
        <div className="form-field">
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
        <div className="form-field">
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
        <div className="form-field">
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
      <div className="form-button">
        <button tyle="submit">Add tour</button>
      </div>
    </form>
  );
};

export default NewTourForm;
