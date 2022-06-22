import "./tours-filter.css";

const ToursFilter = ({ selectedYear, onChangeYear }) => {
  const changeActiveYear = (event) => {
    onChangeYear(event.target.value);
  };

  const reverseArrayInRange = (start, end) =>
    Array(end - start + 1)
      .fill()
      .map((_, idx) => end - idx);

  return (
    <div className="filter-row">
      <div className="filter-container">
        <label className="filter-name">Filter tours by years:</label>
        <select
          value={selectedYear}
          className="select-year"
          onChange={changeActiveYear}
        >
          {reverseArrayInRange(2018, 2022).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToursFilter;
