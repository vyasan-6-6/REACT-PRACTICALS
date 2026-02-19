import {  createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export const ContextProvider = ({children})=>{
    const [color,setColor] = useState(()=>{
    return localStorage.getItem("color") || "light"
  }); 
  
  const [show,setShow] = useState(false) 
   
  useEffect(() => {  
    document.body.className = color;
      localStorage.setItem("color",color)
  }, [color]);

  const value = {
    setColor,color,show,setShow
  }
    return <themeContext.Provider value={value}>{children}</themeContext.Provider>
}

const useTheme = ()=>{
    return useContext(themeContext);
}
 
export default useTheme;


