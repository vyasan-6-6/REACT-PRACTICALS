import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "../slices/themeSlice"
import { useEffect } from "react";

const Theme = () => {
    const mode = useSelector((state)=>state.theme.mode)
    const dispatch =useDispatch();


    useEffect(() => {
      document.documentElement.setAttribute("Data-theme",mode)
     
    }, [mode])
    
    
  return (
    <div style={{
       
        // width:"100vw",
        // height:"100vh",
        // color:mode === 'light' ? "black" :mode==="dark" ?"#e0e1dd":"red",
        // backgroundColor:mode==="light"?"white": mode ==="dark" ? "#0d1b2a" : "royalblue",
    }}> <div className=" mx-auto text-center">

        <h1>{mode.toUpperCase() }mode</h1>
        <button onClick={()=>dispatch(changeTheme())}>change theme</button>
    </div>
    </div>
  )
}

export default Theme