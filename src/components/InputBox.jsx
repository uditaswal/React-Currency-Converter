import React, { useId } from "react";
import "../index.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <>
      <div
        id="InputBox-inputdiv"
        className={`border-2 bg-white min-w-1/2 min-h-16 text-sm rounded-md p-3 flex ${className}`}
      >
        <div id="InputBox-labeldiv" className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            className="focus:outline-none focus:border-0 focus custom-input w-full bg-transparent py-1.5"
            type="number"
            name=""
            // min="0"
            placeholder="0"
            id={amountInputId}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>

        <div
          id="InputBox-datadiv"
          className="w-1/2 flex flex-wrap  justify-end text-right"
        >
          <label htmlFor="" className="text-black/40 mb-2 w-full ">
            Currency Type
          </label>

          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none focus:outline-none focus:border-0 "
            name=""
            id=""
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
