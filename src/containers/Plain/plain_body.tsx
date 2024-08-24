import { AppContext } from "@/pages";
import React, { useContext } from "react";
import { PlainTweet } from "..";

function getMaxFactor(): number {
  if (typeof window !== "undefined" && window.innerWidth <= 767) {
    return 400; // for mobile devices
  } else {
    return 650; // for desktop devices
  }
}

const PlainBody = () => {
  const { bgColor, bgType, width, height } = useContext(AppContext);
  const scaleBy = width > height ? height : width;
  const maxFactor = getMaxFactor(); // adjust this value as necessary
  const scaleFactor = Math.min(1, maxFactor / scaleBy);
  const scaledWidth = Math.round(width * scaleFactor);
  const scaledHeight = Math.round(height * scaleFactor);
  const color = bgColor.replace("bg-[", "").replace("]", "");

  return (
    <div
      className={`relative 
    rounded-2xl  m-2 grid place-content-center
     p-12 bg-white  shadow-2xl min-h-fit`}
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        backgroundColor: `${color}`,
      }}
    >
      <PlainTweet />
    </div>
  );
};

export default PlainBody;
