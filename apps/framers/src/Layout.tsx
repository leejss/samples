import { Outlet } from "react-router-dom";
import Bottom from "./components/Bottom";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
      <Bottom />
    </div>
  );
};

export default Layout;
