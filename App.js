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
  const [show, setShow] = useState(false);
  const [showReader, setShowReader] = useState(false);

  return (
    <>
<h1 className="text-center p-2 bg-slate-500 ">This is just a demo</h1>

   <div className="gray p-4 ">

 { !show && <div className="bg-orange-400 p-2 text-center" onClick={()=>{
     setShow(true)
   }}><button>Register</button></div>
   
  }
</div>



   <div className="w-56 m-auto">
      {show && <QRCode value={final}></QRCode>}
</div>

    {show &&  <Detailuser setAdhar={setadhar} setMobile={setmobile} />
}
     
{show &&  <button className="p-3 text-center rounded-md  bg-gray-800 text-cyan-50 w-full"
        onClick={() => {
          setfinal(adhar + "/" + mob);
         
        }}
      >
        Generate Qr code
      </button>}
  {

 !showReader && <div onClick={()=>{
  setShowReader(true)
}} className="bg-orange-400 p-2 text-center"><button>Scan Qr code</button></div>


}

      <div className="w-56 m-auto">
      {showReader && <Reader/>}
</div>

    </>
  );
};
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
