import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} //OUR button can have bydefault value or we can pass value in the function
      {...props} //Spreading the props (if u have some other feature want to add have it in prop)
    >
      {/* Name of the function button  */}
      {children}
    </button>
  );
}
