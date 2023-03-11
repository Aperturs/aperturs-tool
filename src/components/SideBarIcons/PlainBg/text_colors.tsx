import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "@/pages";
import { BiText } from "react-icons/bi";

const TextColor = () => {
  const { textColor } = useContext(AppContext);

  return (
    <div className="sidebar_icon flex-col dropdown dropdown-right dropdown-hover">
      <BiText tabIndex={0} className={`text-3xl ${textColor} w-8 h-8 `} />

      <p className="icon_text">Color</p>
      <Menu />
    </div>
  );
};

const Menu = () => {
  return (
    <div
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 items-center grid grid-cols-4 gap-1"
    >
      <Color color="text-[#ffffff]" />
      <Color color="text-[#000000]" />
      <Color color="text-[#7CD3FC]" />
      <Color color="text-[#C1400B]" />
      <Color color="text-[#FDE046]" />
      <Color color="text-[#F77171]" />
      <Color color="text-[#c4b5fd]" />
      <Color color="text-[#f0abfc]" />
    </div>
  );
};

const Color = ({ color = "text-red" }: { color: string }) => {
  const { setTextColor, textColor } = useContext(AppContext);
  const bgColor = color.replace("text", "bg");

  return (
    <div
      className={`${bgColor} w-8 h-8 rounded-xl hover:border-2 border-gray-400 m-1
        ${textColor === color ? "border-2  border-blue-800" : ""}`}
      onClick={() => {
        setTextColor(`${color}`);
      }}
    ></div>
  );
};

export default TextColor;
