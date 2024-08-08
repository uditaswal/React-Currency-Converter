// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
import { useState, useRef, useEffect } from "react";
import "./App.css";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {

  // useCurrencyInfo("usd");
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("INR");
  const [fromAmount, setfromAmount] = useState("000");
  const [toAmount, settoAmount] = useState("111");

  const fromAmountRef = useRef(null);
  const toAmountRef = useRef(null);
  const fromCurrencyRef = useRef(null);
  const toCurrencyRef = useRef(null);

  function swapBtn() {
    setfromAmount(toAmountRef.current.value);
    settoAmount(fromAmountRef.current.value);
    setfromCurrency(toCurrencyRef.current.value);
    settoCurrency(fromCurrencyRef.current.value);
  }
  return (
    <>
      <div
        id="bg-box"
        className="h-screen w-screen grid place-content-center items-center bg-cover bg-center bg-[url('./src/assets/currency-bitcoin-money-wallpaper.jpg')]"
      >
        <div
          id="app-div"
          className=" backdrop-blur-md bg-white/10  flex flex-col p-6 font-sans items-center  border-2 border-white rounded-md"
        >
          <div
            id="initial-currency-div"
            className="mt-4 w-full bg-white py-4 px-2 rounded-md flex flex-col mx-0"
          >
            <div id="title-div" className="flex flex-row  justify-between mb-2">
              <h1 className=" text-slate-400">From</h1>
              <h1 className="text-slate-400">Currency Type</h1>
            </div>

            <div id="input-div" className="flex flex-row  justify-between">
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setfromAmount(e.target.value)}
                ref={fromAmountRef}
                // defaultValue="000"
                name=""
                id=""
                className=""
                min="0"
              />

              <select
                name=""
                id="currency-options"
                className="bg-gray-200 p-1 rounded-md"
                // defaultValue="USD"
                onChange={(e) => setfromCurrency(e.target.value)}
                value={fromCurrency}
                ref={fromCurrencyRef}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          <button
             id="swap-btn"
            className="rounded-md h-8 w-16 border-2 border-white -my-2 z-10 text-white  bg-blue-700 hover:bg-blue-400 active:bg-blue-900"
            onClick={swapBtn}
          >
            SWAP
          </button>

          <div
            id="final-currency-div"
            className="my-0 w-full bg-white py-4 px-2 rounded-md flex flex-col mx-0"
          >
            <div id="title-div" className="flex flex-row  justify-between mb-2">
              <h1 className=" text-slate-400">To</h1>
              <h1 className="text-slate-400">Currency Type</h1>
            </div>
            <div id="input-div" className="flex flex-row  justify-between">
              <input
                type="number"
                ref={toAmountRef}
                value={toAmount}
                onChange={(e) => {
                  settoAmount && settoAmount(e.target.value);
                }}
                min="0"
                // defaultValue="1111"
                name=""
                id=""
                className=""
              />

              <select
                name=""
                id="currency-options"
                className="bg-gray-200 p-1 rounded-md"
                // defaultValue="INR"
                value={toCurrency}
                ref={toCurrencyRef}
                onChange={(e) => settoCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          <div id="convert-btn-div">
            <button className="rounded-md w-full  py-2 p-32 mt-4 text-white  bg-blue-700 hover:bg-blue-400 active:bg-blue-900">
              Convert {fromCurrency} to {toCurrency}
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
