import SingleTour from "./single-tour/SingleTour";
import { toursData } from "./payload";

const App = () => {
  return (
    <div>
      {toursData.map((tourData) => (
        <SingleTour
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
