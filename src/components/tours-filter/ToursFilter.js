import styles from './tours-filter.module.scss';

const ToursFilter = ({ selectedYear, onChangeYear }) => {
  const changeActiveYear = (event) => {
    onChangeYear(event.target.value);
  };

  const reverseArrayInRange = (start, end) =>
    Array(end - start + 1)
      .fill()
      .map((_, idx) => end - idx);

  return (
    <div className={styles['filter-row']}>
      <div className={styles['filter-container']}>
        <label className={styles['filter-name']}>Filter tours by years:</label>
        <select
          value={selectedYear}
          className={styles['select-year']}
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
