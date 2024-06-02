import { useState } from "react";
import InputBox from "./componenets/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);

  const options = Object.keys(currencyinfo); //It separayes out all the keys from the obj of keys and value given by api

  const swap = () => {
    setfrom(to);
    setto(from);

    setconvertedamount(amount);
    setamount(convertedamount); //these are the functonlaiites of the swap button
  };
  const convert = () => setconvertedamount(amount * currencyinfo[to]);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/3d-rendering-main-currency-exchange-world-black-background-copy-space-forex-trading-investment-concept_50039-2646.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); //Does stop the form to submit in the backend
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                OnCurrencyChange={(currency) => setfrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyOptions={options}
                OnCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
