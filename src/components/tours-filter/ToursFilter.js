import "./tours-filter.css";

const ToursFilter = () => {
  return (
    <div className="filter-row">
      <div className="filter-container">
        <h3 className="filter-name">Filter tours by years:</h3>
        <select className="select-year">
          <option value="all" selected="selected"></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ToursFilter;
