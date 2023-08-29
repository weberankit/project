import React from "react";
import ReactDOM from "react-dom/client";
import QRCode from "react-qr-code";
import Detailuser from "./src/DeatilUser";
import { useState } from "react";
import Reader from "./src/QrReader";
import "./index.css";
const App = () => {
  const [mob, setmobile] = useState(121);
  const [adhar, setadhar] = useState(121);

  console.log(mob, adhar);
  const [final, setfinal] = useState("");

 ;

  return (
    <>
<h1 className="text-center p-2 bg-slate-500 ">SALO0 TAE KARKEDO MERA NHI to Tumari AISI KI tAisi.....</h1>

   <div className="gray p-4 ">
   
   </div>





   <div className="w-56 m-auto">
         <QRCode value={final}></QRCode>
</div>

      <Detailuser setAdhar={setadhar} setMobile={setmobile} />

     
     <button className="p-3 text-center rounded-md  bg-gray-800 text-cyan-50 w-full"
        onClick={() => {
          setfinal(adhar + "/" + mob);
         
        }}
      >
        Generate Qr code
      </button>
      <Reader/>


    </>
  );
};
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
