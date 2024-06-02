function InputBox({
  label, //from ,to ?
  //ADDED LATER
  amount,
  onAmountChange,
  OnCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  className = "", //you can add extra styles in this componenets
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount} //from user amount will come
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        {/* On amount change is a function we would create and we are write and here becz 
         it will check if the value is passed in the function or not and  number is written bcz it covert it into number as js may convert it into string */}
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)}
        >
          {/* // REMEBMER!! We use key while looping in react as it imroves it permormance a lot   */}
          {currencyOptions.map((Currency) => (
            //this is a loop map function
            <option key={Currency}>{Currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
