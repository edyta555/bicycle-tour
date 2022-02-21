import "./tour-date.css";

const TourDate = (props) => {
  const tourDay = props.tourDate.toLocaleString("en-US", { day: "2-digit" });
  const tourMonth = props.tourDate.toLocaleString("en-US", { month: "long" });
  const tourYear = props.tourDate.getFullYear();

  return (
    <div className="single-tour-date">
      <div className="tour-day">{tourDay}</div>
      <div className="tour-month">{tourMonth}</div>
      <div className="tour-year">{tourYear}</div>
    </div>
  );
};

export default TourDate;
