import { useState } from "react";
import SingleTour from "./single-tour/SingleTour";
import { initialToursData } from "./payload";
import NewTour from "./new-tour/NewTour";
import ToursFilter from "./tours-filter/ToursFilter";
import NoTour from "./no-tour/NoTour";

const App = () => {
  const [toursData, setToursData] = useState(initialToursData);
  const [selectedYear, setYear] = useState("2022");

  const saveTourData = (newTourData) => {
    setToursData((prevToursData) => {
      return [...prevToursData, newTourData];
    });
  };

  const filterToursByYear = (year) => {
    setYear(year);
  };

  const toursToShow = toursData.filter((tour) => {
    return tour.tourDate.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <NewTour onSaveTourData={saveTourData} />
      <ToursFilter
        selectedYear={selectedYear}
        onChangeYear={filterToursByYear}
      />
      {toursToShow.length === 0 ? (
        <NoTour />
      ) : (
        toursToShow.map((tourData) => (
          <SingleTour
            key={tourData.id}
            date={tourData.tourDate}
            startPoint={tourData.startPoint}
            endPoint={tourData.endPoint}
            distance={tourData.tourDistance}
          />
        ))
      )}
    </div>
  );
};

export default App;
