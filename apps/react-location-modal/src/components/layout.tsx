import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center  bg-slate-100">
      <div className="w-[440px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
