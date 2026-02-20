import { useState } from "react"

 

const CharacterCounter = () => {
    const [text,setText] = useState('');
const maxlimit = 10; 
  return (
    <div className="w-100 mx-auto  mt-2.5 ">
    <h1>Character live counter</h1>
    <textarea
    onChange={(e)=>setText(e.target.value)}
    rows={5}
    className="p-4 w-full font-bold"
    />
    <p style={{
        color: text.length >=maxlimit ? "red":"black",
        textAlign:"right",
        marginTop:"5px"
    }}>{text.length}/{maxlimit}</p>
     </div>
  )
}

export default CharacterCounter