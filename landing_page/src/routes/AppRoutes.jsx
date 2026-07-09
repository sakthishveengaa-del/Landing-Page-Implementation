import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

/**
 * AppRoutes manages all the application routes.
 * Currently, it renders the LandingPage at the root ("/") path.
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;