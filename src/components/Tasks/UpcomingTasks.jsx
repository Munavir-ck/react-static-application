import React from "react";
import { BsSearch, BsCalendarDate } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import CustomButton from "../CustomButtons/CustomButton";
import Card from "../Cards/Card";

function UpcomingTasks() {
  const blueColor = "#007bff";
  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="md:h-14 flex items-center justify-center">
          <div className="pt-1 relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-11 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <BsSearch size={20} />
            </button>
          </div>
        </div>
        <div className="md:h-14 flex justify-between items-center p-5">
        <div className="flex items-center border border-gray-400 p-2 rounded-lg">
          <BsCalendarDate size={20} color={blueColor} />
          <span className="ml-2">From</span>
        </div>
        <h1 className="font-semibold">To</h1>
        <div className="flex items-center border border-gray-400 p-2 rounded-lg">
          <BsCalendarDate size={20} color={blueColor} />
          <span className="ml-2">To Date</span>
        </div>
        </div>
        <div className="md:h-14 flex items-center justify-center gap-2">
          <CustomButton title={"Apply"} Buttonstyle={"rounded-full w-20"} />
          <CustomButton
            title={"Reset"}
            Buttonstyle={
              "rounded-full w-20 bg-white text-blue-600 border border-blue-600"
            }
          />
        </div>
        <div className="md:h-14 flex items-center justify-center">
          <div className="flex items-center border border-gray-400 p-2 rounded-lg">
            <BiFilterAlt size={20} />
            <span className="ml-2">Filter</span>
          </div>
        </div>
      </div>
      <div className="flex-col w-full p-4 space-y-1">
        <h1 className="font-semibold">Thursday, 28 Dec 2022</h1>
        <Card
          status={"Overdue"}
          task={"Intake Comprehensive Assessment"}
          buttonTitle={"Start Assessment"}
        />
      </div>
      <div className="flex-col w-full p-4 space-y-1">
        <h1 className="font-semibold">Thursday, 28 Dec 2022</h1>
        <Card
          status={"Upcoming"}
          task={"Intake Comprehensive Assessment"}
          buttonTitle={"Continue Assessment"}
        />
        <Card
          status={"Overdue"}
          task={"Physiotherapy Assessment"}
          buttonTitle={"Start Assessment"}
        />
      </div>
    </div>
  );
}

export default UpcomingTasks;


