import React from 'react'

function CustomButton({Buttonstyle,title}) {
  return (
    <div><button className={`bg-violet-950 cursor-pointer rounded-lg text-sm text-white h-8 ${Buttonstyle }`}>
        {title}
        </button></div>
  )
}

export default CustomButton