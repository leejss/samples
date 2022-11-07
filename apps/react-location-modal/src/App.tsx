import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Modal from "./components/modal";
import Explore from "./routes/explore";
import Home from "./routes/home";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location.state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
      {location.state?.backgroundLocation && (
        <Routes>
          <Route path="/img/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
