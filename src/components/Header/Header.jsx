import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {
  const location=useLocation()
  const currentPath=location.pathname



  return (
    <div className="w-full h-24 border-2 px-2 flex-col ">
      <div
       className="h-2/4">
           
        {" "}
        <h1 className="font-semibold text-2xl">Tasks</h1>
       
        <h1 className="font-thin text-sm">Clinical > Tasks</h1>
      </div>
      <div className="flex gap-2 h-2/4 items-end">
      <Link to={"/"}>
      <h1 className={`${currentPath==="/"?"text-blue-700":"text-black"} underline  font-semibold text-xs font-serif`}>Upcoming Task</h1>
      </Link>

      <Link to={"/completed"}>
      <h1 className={`${currentPath==="/completed"?"text-blue-700":"text-black"} underline font-semibold text-xs font-serif`}>Completed Task</h1>
      </Link>
      </div>
    </div>
  );
}

export default Header;
