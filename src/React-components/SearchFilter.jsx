import { useEffect, useState } from "react";

 
const SearchFilter = () => {

const [searchTerm,setSearchTerm] = useState("");
const [debounceTerm,setDebounceTerm] = useState("");

    const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Headphones" },
    { id: 5, name: "Smartwatch" },
  ];



  useEffect(() => {
    let timer = setTimeout(() => {
        setDebounceTerm(searchTerm)
    }, 500);
  
    return () => {
      clearTimeout(timer)
    };
  }, [searchTerm])
  const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(debounceTerm.toLowerCase()))
   

  return (
    <div className="w-100 mx-auto mt-25"> 

        <h1>search bar</h1>
        <input type="text" placeholder="enter the product name" className="w-full p-2 mt-3.75" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
 
  {filteredProducts.length>0?(
filteredProducts.map((product,index)=>(
    <ul key={index}>
        <li>{product.name}</li>
    </ul>
))
  ):(
 <p>No results found</p>  )}
    </div>
  )
}

export default SearchFilter