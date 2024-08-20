import { useState } from "react";
import InputBox from "./components/index";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom((prevFrom) => {
      const newFrom = to;
      setTo(prevFrom);
      return newFrom;
    });

    // Perform the conversion after swapping the currencies
    setConvertedAmount((prevConvertedAmount) => {
      const newAmount = prevConvertedAmount / currencyInfo[to];
      setAmount(prevConvertedAmount);
      return newAmount.toFixed(2);
    });
  };

  const convert = () => {

    if (isNaN(amount)|| amount<=0){
      alert("Please Enter Valid Amount");
      return;
    }
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      convert();
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col bg-cover bg-no-repeat bg-[url('./src/assets/bg-img.jpeg')]">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            action=""
            onKeyDown={handleKeyDown}
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                isautoFocus
              />
            </div>

            <div className="-mt-3 z-10">
              <button
                type="button"
                onClick={swap}
                className="text-white bg-blue-600 py-2 px-4 border-white border-2 rounded-md relative left-1/2 -translate-x-1/2"
              >
                Swap
              </button>
            </div>

            <div className="-mt-3 z-0 w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(convertedAmount) =>
                  setConvertedAmount(convertedAmount)
                }
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 mt-2 py-2 px-4 border-white border-2 rounded-md relative left-1/2 -translate-x-1/2"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
