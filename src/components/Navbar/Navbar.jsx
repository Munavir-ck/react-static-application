import React from "react";
import CustomButton from "../CustomButtons/CustomButton";
import { AiOutlineBell} from 'react-icons/ai';

import { BsQuestionCircle } from 'react-icons/bs';


function Navbar() {
  return (
    <div className="hidden md:block md:fixed md:top-0 w-full bg-white shadow">
    <div className="flex max-w-screen-2xl h-full mx-auto px-4 p-5 items-center justify-between border-2">
      <h1 className="text-3xl uppercase font-bold ml-3">Logo</h1>
      <ul className="flex items-center gap-8 font-medium">
        <li>Dashboard</li>
        <li>Patient</li>
        <li>Human Resources</li>
        <li>Clinical</li>
        <li>Compplaince</li>
        <li>Billing</li>
      </ul>
      <ul className="flex items-center gap-8 uppercase text-sm font-semibold">
        <li className="">
          <AiOutlineBell size={20} />
        </li>
        <li className="">
          <BsQuestionCircle size={20} />
        </li>
        <CustomButton
          Buttonstyle={"w-32 text-white border-2 bg-white text-black"}
          title={"Checked in"}
        />
        <li className="">
          <div className="w-9 h-9 border-1 bg-slate-400 rounded-full flex items-center justify-center">
            <p className="text-white">M</p>
          </div>
        </li>
        <li className="">Account</li>
      </ul>
    </div>
  </div>
  
  );
}

export default Navbar;
