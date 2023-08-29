import React from "react"
import ReactDOM from "react-dom/client";
import QRCode from "react-qr-code";
import Detailuser from "./DeatilUser";
import { useState } from "react";

const App=()=>{
    const [mob ,setmobile] =useState(121);
    const [adhar ,setadhar] =useState(121);
    console.log(mob,adhar)
    const [final ,setfinal] =useState("");
     const [qrcode, setQrcode] = useState(null);

const downloadQrcode = () => {
    const link = document.createElement("a");
    link.href = qrcode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
  };



function add(){
const qrImage =<QRCode value={final}  level={"H"}
size={150}
/>
//setQrcode(qrcodeImage.toDataURL());
setQrcode(qrImage.toDataURL());
}
return(


    <>

    <Detailuser setadhar={setadhar} setmobile={setmobile}/>
    <h1>hi there</h1>
    <QRCode value={final}  level={"H"}
        size={150}
        />

   


    <button onClick={()=>{
        setfinal(adhar+"/"+mob)
        add()
    }}>submit</button>
 <button onClick={downloadQrcode}>Download QR Code</button>
      {qrcode && <img src={qrcode} />}


    </>
)
 

    }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)