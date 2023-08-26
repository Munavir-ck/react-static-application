import React from "react";
import SidebarButtons from "./SidebarButtons";

import { SiConsul } from "react-icons/si";

import { LiaHospital } from "react-icons/lia";
import CustomButton from "../CustomButtons/CustomButton";


function SideBar() {
  return (
    <div>
      <div
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 border-2"
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-start h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
          <div>
            <div className="flex-col items-center justify-between  px-3 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
              <h1 className="text-2xl font-bold ml-1">Med Life</h1>
      
            </div>
          </div>
          <ul className="space-y-2 font-medium p-10">
          <li>
              <div className="flex items-center p-2 w- text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
               <CustomButton title={"Add Clinical"} Buttonstyle={"w-32"}/>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-500 dark:hover:bg-gray-700 group">
                <SidebarButtons title="Tasks"  icon={<SiConsul />} />
              </div>
            </li>
            <li>
              <div className="w-auto flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Appoiments"
                  to="/appoiments"
                  icon={<LiaHospital />}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
