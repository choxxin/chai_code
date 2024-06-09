import React, { useId } from "react";
//It is going to be a button of a dropdown menu
function Select(
  {
    options,
    label,
    className,
    ...props
    //we always write ref while using react refernce
    //select tag used for a dropdown menu
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor="id" className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        //backtiks for the
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* Looping through  the option  */}
        {/* ? bcz if there is  option then only loop if there is no ? then the app will crash */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select); //Directly u can use useref from here
