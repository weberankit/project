import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
const Reader=()=>{
const [scanResult ,setScanResult] = useState(null);


useEffect(()=>{

    const scanner =  new Html5QrcodeScanner('reader',{
        qrbox:{
            width:250,
            height:250,
        },
        fps:5,
    })
    scanner.render(success , error);
    
    
    function success(result){
      scanner.clear();
      setScanResult(result)
    }
    
    function error(err){
    console.warn(err)
    }
    
},[])




    return(
<div className="p-2 bg-slate-500">
{

    scanResult
    ?<div>success:<a href={"https://"+scanResult}>{scanResult}</a></div>
    :<div id="reader"></div>
}


</div>


    )
}




export default Reader;