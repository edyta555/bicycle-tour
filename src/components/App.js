import SingleTour from "./single-tour/SingleTour";
import { toursData } from "./payload";
import NewTour from "./new-tour/NewTour";

const App = () => {
  return (
    <div>
      <NewTour />
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
