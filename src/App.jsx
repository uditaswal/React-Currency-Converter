import React from "react"
import InputBox from  './components/index'
import  './App.css'

// import App from  './App.jsx'
 
function App() {
  return (
    <> 
    <div 
    className="w-full h-screen flex  justify-center items-center flex-col bg-cover bg-no-repeat
  bg-[url('./src/assets/currency-bitcoin-money-wallpaper.jpg')]
    "
  
    >
    <InputBox  label="From"/>
    <InputBox label="To" className="" />

    </div>
    </>

  )
}

export default App;