import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const url = useLocation().pathname;
  const name = url.slice(1);

  return (
    <nav className="flex justify-center space-x-4 bg-zinc-900 absolute p-2 left-0 top-0 w-full ">
      {name == "" ? (
        <Link to="/">
          <button className="bg-gray-700 border-2 border-custom-green">Home</button>
        </Link>
      ) : (
        <Link to="/">
          <button className="border-2 border-slate-200">Home</button>
        </Link>
      )}

      {name == "julieta" ? (
        <Link to="julieta">
          <button className="bg-gray-700 border-2 border-custom-green">julieta</button>
        </Link>
      ) : (
        <Link to="julieta">
          <button className="border-2 border-slate-200">julieta</button>
        </Link>
      )}
      {name == "juan" ? (
        <Link to="juan">
          <button className="bg-gray-700 border-2 border-custom-green">juan</button>
        </Link>
      ) : (
        <Link to="juan">
          <button className="border-2 border-slate-200">juan</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
