import { Outlet } from "react-router-dom";
import Bottom from "./components/Bottom";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col max-w-[450px] w-full mx-auto relative">
      <div className="flex-1">
        <Outlet />
      </div>
      <Bottom />
    </div>
  );
};

export default Layout;
