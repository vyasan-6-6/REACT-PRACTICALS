import { useState } from "react";


const Tabs = () => {

  const [activeTab,setActiveTab] = useState(0); 
  
  const tabs = [
    {
      label: "Home",
      content: "Welcome to the Home tab.",
    },
    {
      label: "Profile",
      content: "This is your Profile information.",
    },
    {
      label: "Settings",
      content: "Adjust your Settings here.",
    },
  ];
  return (
     <div className="w-100 mt-12.5 mx-auto">
      <div style={{display:"flex",borderBottom:"2px solid #ccc"}}>
        {tabs.map((tab,index)=>(
          <div key={index} onClick={()=>setActiveTab(index)}
          style={{background:activeTab === index ?"#333" :"#f4f4f4" , color:activeTab===index ? "#fff":"#000",padding:"10px",flex:1,border:"none",cursor:"pointer"}}
          >{tab.label}</div>
        ))}
      </div>
        <div style={{padding:"20px",border:"1px solid #ccc",textAlign:'center'}}>{tabs[activeTab].content}</div>
     </div>
   )
 }
 
 export default Tabs