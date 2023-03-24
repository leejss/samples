import { Link } from "react-router-dom";

const links = ["/", "/profile", "/setting"];

const Bottom = () => {
  return (
    <nav className="flex gap-2 justify-center items-center h-10 bg-black text-white">
      {links.map((l) => (
        <Link key={l} to={l} className="p-2">
          {l}
        </Link>
      ))}
    </nav>
  );
};

export default Bottom;
