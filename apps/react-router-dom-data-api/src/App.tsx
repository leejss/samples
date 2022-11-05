import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

const App = () => {
  return (
    <div>
      <h1 className="text-red-400 text-4xl">hello1231312</h1>
    </div>
  );
};

export default App;
