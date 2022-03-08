import "./new-tour-form.css";

const NewTourForm = () => {
  return (
    <form>
      <div className="form-fields">
        <div className="form-field">
          <label>
            Start point:
            <input type="text" />
          </label>
        </div>
        <div className="form-field">
          <label>
            End point:
            <input type="text" minLength="1" />
          </label>
        </div>
        <div className="form-field">
          <label>
            Distance:
            <input type="number" min="1" step="1" />
          </label>
        </div>
        <div className="form-field">
          <label>
            Date:
            <input type="date" min="2018-01-01" max="2022-12-21" />
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
