import Navigation from "./components/Navigation";

import { Routes, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import PlansPage from "./views/PlansPage";

const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
