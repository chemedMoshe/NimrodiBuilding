import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import useBuildingData from "./utils/BuildingDataProvider";
import { Route, Routes } from "react-router-dom";
import privateRoute from "./utils/PrivateRoute";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Layout />} />
        <Route path="floor/:index" element={<privateRoute component={<Floor />} />} />
        <Route path="forbidden" element={<Forbidden />} />
      </Routes>
    </div>
  );
}

export default App;
