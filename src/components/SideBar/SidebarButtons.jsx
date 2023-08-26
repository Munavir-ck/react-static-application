import React from "react";
import { IconContext } from "react-icons";




function SidebarButtons(props) {
  
  return (
    <>
     
        <div className={`flex gap-5  `}>
          <IconContext.Provider
            value={{ size: "26", color:"grey" }}
          >
            {props.icon}
            <p className={`text-black w-auto"`}>
              {props.title}
            </p>
          </IconContext.Provider>
        </div>
      
    </>
  );
}

export default SidebarButtons;
