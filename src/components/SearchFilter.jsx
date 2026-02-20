import { useState } from "react";

 
const SearchFilter = () => {

const [searchTerm,setSearchTerm] = useState("")

    const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Headphones" },
    { id: 5, name: "Smartwatch" },
  ];

  const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="w-100 mx-auto mt-25"> 

        <h1>search bar</h1>
        <input type="text" placeholder="enter the product name" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
 
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