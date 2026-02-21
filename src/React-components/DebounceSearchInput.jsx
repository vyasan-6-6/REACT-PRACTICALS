import { useEffect, useState } from "react"

 
const DebounceSearchInput = () => {
    const [query,setQuery] = useState("");
    const [debounceQuery,setDebounceQuery] = useState('');


    useEffect(() => {
       const timer = setTimeout(() => {
        setDebounceQuery(query)
       }, 500);
    
      return () => {
        clearTimeout(timer)
      }
    }, [query]);

    useEffect(() => {
      
        console.log("API CALL with :",debounceQuery);
        
    
 
    }, [debounceQuery])
    
    
  return (
    <div className="mx-auto mt-25 w-100">
        <h1>Debounce Search</h1> 
<input type="text" placeholder="searching..." onChange={(e)=>setQuery(e.target.value.trim())} value={query} />
    </div>
  )
}

export default DebounceSearchInput