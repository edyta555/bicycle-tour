import SingleTour from "./single-tour/SingleTour";
import { toursData } from "./payload";

const App = () => {
  return (
    <div>
      <SingleTour
        date={toursData[0].tourDate}
        startPoint={toursData[0].startPoint}
        endPoint={toursData[0].endPoint}
        distance={toursData[0].tourDistance}
      />
      <SingleTour
        date={toursData[1].tourDate}
        startPoint={toursData[1].startPoint}
        endPoint={toursData[1].endPoint}
        distance={toursData[1].tourDistance}
      />
      <SingleTour
        date={toursData[2].tourDate}
        startPoint={toursData[2].startPoint}
        endPoint={toursData[2].endPoint}
        distance={toursData[2].tourDistance}
      />
    </div>
  );
};

export default App;
