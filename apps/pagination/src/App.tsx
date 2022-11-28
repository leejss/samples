import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader } from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: ({ request }) => {
      const { url } = request;
      const pageParam = new URLSearchParams(url.split("?")[1]).get("page");
      if (!pageParam) throw new Error("No pageParams");
      return loader(pageParam);
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
