import useTheme from "./context/contextProvider"

 

function App() {
const {setColor,color} = useTheme()
  
  return (
    <div className="container">
    <h1>{color.toUpperCase() }Mode</h1>
     <button onClick={()=>setColor(pre=>pre==="light"?"dark" :"light")}>change</button>
    </div>
  )
}

export default App
