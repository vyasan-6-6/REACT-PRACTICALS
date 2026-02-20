import { useEffect, useState } from "react"

 
const DigitalClock = () => {
    const [time,setTime] = useState(new Date());

    useEffect(() => {
      let intervaild = setInterval(() => {
        setTime(new Date());
      }, 1000);
    
      return () => {
         clearInterval(intervaild);
      }
    }, [])
    
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
       {time.toLocaleTimeString()}
    </div>
  )
}

export default DigitalClock