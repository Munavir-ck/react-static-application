import React from "react";
import CustomButton from "../CustomButtons/CustomButton";

function Card({ status, buttonTitle, task }) {
  return (
    <div className="md:h-28 w-full md:flex justify-between border border-gray-400">
      <div className="p-3 flex flex-col md:flex-row gap-2">
        <img
          src="/Assets/user.png"
          className="rounded-full h-20 w-20 md:items-center"
          alt="Profile picture of the user"
        />

        <ul className="px-4 space-y-2 md:space-y-0 md:ml-2 font-bold">
          <li>
            <h1 className="text-lg">Malani Laurent</h1>
          </li>
          <li>
            <h1 className="text-gray-500">Appointment Id: 32332232</h1>
          </li>
          <li>
            <p className="text-blue-800 mt-1 md:mt-4">{task}</p>
          </li>
        </ul>
      </div>
      <div className="p-3 md:p-5">
        <ul className="space-y-1 md:space-y-0 md:ml-4 font-bold">
          <li>
            <h1 className="text-gray-500 text-sm">
              Task Id: <span className="text-black md:px-14">322023</span>
            </h1>
          </li>
          <li>
            <h1 className="text-gray-500 text-sm">
              Date & Time:
              <span className="text-black md:px-5">December 22, 2023</span>
            </h1>
          </li>
          <li>
            <h1 className="text-gray-500 text-sm">
              Duration: <span className="text-black md:px-11">1 hour</span>
            </h1>
          </li>
        </ul>
      </div>
      <div className="h-full flex flex-col md:flex-col md:items-center p-3 space-y-2 md:space-y-2 md:space-x-4">
        <h1 className={`${status ? "" : "hidden"} text-gray-700 text-sm`}>
          Status{" "}
          <span
            className={`${
              status === "Upcoming" ? "text-green-600" : "text-red-600"
            } text-2xl`}
          >
            {status}
          </span>
        </h1>
        <CustomButton Buttonstyle={"w-auto p-1"} title={buttonTitle} />
      </div>
    </div>
  );
}

export default Card;

