import { useState } from "react"

 

const CharacterCounter = () => {
    const [text,setText] = useState('');
const maxlimit = 100; 
  return (
    <div className="w-100 mx-auto  mt-2.5 ">
    <h1>Character live counter</h1>
    <textarea
  onChange={(e) => {
  if (e.target.value.length <= maxlimit) {
    setText(e.target.value);
  }
}}
placeholder="Typing something..."

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