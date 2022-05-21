import { useState } from "react";
import SingleTour from "./single-tour/SingleTour";
import { initialToursData } from "./payload";
import NewTour from "./new-tour/NewTour";
import ToursFilter from "./tours-filter/ToursFilter";

const App = () => {
  const [toursData, setToursData] = useState(initialToursData);

  const saveTourData = (newTourData) => {
    setToursData((prevToursData) => {
      return [...prevToursData, newTourData];
    });
  };

  return (
    <div>
      <NewTour onSaveTourData={saveTourData} />
      <ToursFilter />
      {toursData.map((tourData) => (
        <SingleTour
          key={tourData.id}
          date={tourData.tourDate}
          startPoint={tourData.startPoint}
          endPoint={tourData.endPoint}
          distance={tourData.tourDistance}
        />
      ))}
    </div>
  );
};

export default App;
