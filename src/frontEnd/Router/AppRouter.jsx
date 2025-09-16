import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import BuildingSelector from "../components/BuildingSelector";
import BuildingUpdater from "../components/BuildingUpdater";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BuildingSelector" element={<BuildingSelector />} />
        <Route path="/BuildingUpdater" element={<BuildingUpdater />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
