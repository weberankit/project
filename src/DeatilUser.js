const Detailuser=({setAdhar , setMobile})=>{
    return(
       <>
  <div className="detail p-2 bg-black text-cyan-50 ">
<p className="text-center p-5">Register  yourself</p>
      <div className="p-6">Your ID No <input className="text-black" type="number" placeholder="adhar no" onChange={(e)=>{
       setAdhar(e.target.value) 
      }}></input></div> 

      <div className="p-6">Your CarNo <input type="number" className="text-black" placeholder="car no" onChange={(e)=>{
       setMobile(e.target.value)
      }}></input></div>
       </div>
       
       </>

       
    )
}
export default Detailuser;