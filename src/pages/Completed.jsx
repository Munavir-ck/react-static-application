import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

import Tasks from "../components/Tasks/CompletedTask";

function Completed() {
  return (
    <div className="flex-col">
      <Navbar />

      <SideBar />

      <div className="pt-20 overflow-y-auto h-screen hide"> <div className="sm:ml-56 flex-1">
        <Header />
      </div>

      <div className=" p-4 border-1 sm:ml-56 flex-1">
<   Tasks/>
      </div></div>

     
    </div>
  );
}

export default Completed;