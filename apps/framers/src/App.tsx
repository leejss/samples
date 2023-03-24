import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Fade from "./components/Fade";
import Layout from "./Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Fade>
            <Home />
          </Fade>
        }
      />
      <Route
        path="profile"
        element={
          <Fade>
            <Profile />
          </Fade>
        }
      />
      <Route
        path="setting"
        element={
          <Fade>
            <Setting />
          </Fade>
        }
      />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
