import {useEffect, useState} from 'react';



function useCurrencyInfo(currency){
const [data,SetData] = useState({});
useEffect(() => {
  
fetch(` `)
.then(res=>res.json()).then(res=>SetData[currency])
console.log(data)

return () => {
    // second
  }
}, [currency])


}
useCurrencyInfo("usd")
export default useCurrencyInfo;