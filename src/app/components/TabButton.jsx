import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-700"
    : "text-[#adb7be]";
  return (
    <button onClick={selectTab}>
      <p className={`font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
