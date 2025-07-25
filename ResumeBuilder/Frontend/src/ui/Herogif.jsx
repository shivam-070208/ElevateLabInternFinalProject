import React from "react";

const Herogif = () => {
  return (
    <div className="w-[40vw] h-[40vw]  perspective-distant min-h-70 min-w-70 rounded-full relative bg-gradient-to-tl from-[#f90000] via-[#0051ffde] animate-pulse blur-lg origin-center">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-full absolute  bg-gradient-to-br from-red-400 via-blue-500 to-indigo-500 rounded-full origin-center"
          style={{
            zIndex:-10,
            transform: `rotateX(${index * 8}deg) rotateY(${
              index * 35
            }deg) rotateZ(${index * 60}deg)`,
            animationName: "heroic",
            animationIterationCount: "infinite",
            animationDelay: `${index * 0.3}s`,
            animationDuration: `${6 + index * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Herogif;
