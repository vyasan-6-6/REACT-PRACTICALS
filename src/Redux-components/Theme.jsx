import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "../slices/themeSlice"
import { useEffect } from "react";

const Theme = () => {
    const mode = useSelector((state)=>state.theme.mode)
    const dispatch =useDispatch();

    
  return (
    <div style={{
       
        width:"100vw",
        height:"100vh",
        color:mode === 'light' ? "black":"white",
        backgroundColor:mode==="light"?"white":"black"
    }}> <div className=" mx-auto text-center">

        <h1>{mode.toUpperCase() }mode</h1>
        <button onClick={()=>dispatch(changeTheme())}>change theme</button>
    </div>
    </div>
  )
}

export default Theme