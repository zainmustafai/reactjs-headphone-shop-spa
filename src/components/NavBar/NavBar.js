import React from "react";

const NavBar = ({ linkArray,logo }) => {
  return (
    <div className="w-screen grid grid-cols-3 px-8">
      <div id='logoDiv' className="inline-block col-span-1">
        <img src={logo} alt="logo"/>
      </div>
      <div id="whiteSpace" className="col-span-1">

      </div>
      <ul className="flex items-center justify-between col-span-1 px-8">
        {linkArray.map((item) => {
          return <li key={item.id} className="text-[16px]">{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavBar;
