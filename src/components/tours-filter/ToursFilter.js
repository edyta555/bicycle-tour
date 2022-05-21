import "./tours-filter.css";

const ToursFilter = ({selectedYear, onChangeYear}) => {
  
  const changeActiveYear = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="filter-row">
      <div className="filter-container">
        <label className="filter-name">Filter tours by years:</label>
        <select value={selectedYear} className="select-year" onChange={changeActiveYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ToursFilter;
