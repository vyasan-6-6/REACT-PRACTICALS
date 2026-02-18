import { useEffect, useState } from "react"

 

function App() {
  const [color,setColor] = useState( "light");
  console.log(color);
   
  useEffect(() => {  
    document.body.className = color; 
  }, [color])
  
  return (
    <div className="container">
    <h1>{color.toUpperCase() }Mode</h1>
     <button onClick={()=>setColor(pre=>pre==="light"?"dark" :"light")}>change</button>
    </div>
  )
}

export default App
