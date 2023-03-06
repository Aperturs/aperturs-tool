import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "@/pages";

function getTheme(isGlass: boolean): string {
  if (isGlass) {
    console.log("Glass");
    return "Glass";
  } else {
    console.log("Plain");
    return "Plain";
  }
}

const BackgroundType = () => {
  const { setBgType } = useContext(AppContext);

  return (
    <div className="sidebar_icon">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <label className="swap">
          <input
            type="checkbox"
            onChange={(e) => {
              setBgType(getTheme(e.target.checked));
            }}
          />
          <AiFillEye className="swap-on fill-current w-6 h-6 text-slate-500" />
          <AiFillEyeInvisible className="swap-off fill-current w-6 h-6 text-slate-500" />
        </label>
        <p className="icon_text">Fill</p>
      </div>
    </div>
  );
};

export default BackgroundType;
