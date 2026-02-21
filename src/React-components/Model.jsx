import { useEffect, useState } from "react"

const Model = () => {
    const [open,setOpen] = useState(false);
   
    useEffect(()=>{
  const handleEsc = (e)=>{
        if(e.key==="Escape"){
            setOpen(false);
        }
    }

    if(open){
        window.addEventListener("keydown",handleEsc)
    }
    return ()=>{
        window.removeEventListener("keydown",handleEsc)
    }
 
    },[open])
  return (
    <div className="mt-25 text-center">
<h2 onClick={()=>setOpen(true)}>Open Modal</h2>
{open &&(
    <div onClick={()=>setOpen(false)} className="h-screen w-screen bg-black/50 flex justify-center items-center fixed top-0 left-0">
     <div className="p-7.5 rounded-lg min-w-75 bg-white">
        <h1>this is a modal</h1>
        <button onClick={()=>setOpen(false)}>close</button>
     </div>
</div>
)}
    </div>
  )
}

export default Model