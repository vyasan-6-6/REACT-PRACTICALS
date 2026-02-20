import { useState } from "react"


const Pagination = () => {
const items = Array.from({length:56},(_,i)=>`item ${i+1}`);
const itemPerPage = 6;

const [currentPage,setCurrentPage] = useState(1);

 const startIndex = (currentPage-1)* itemPerPage;

 const totalPages = Math.ceil(items.length/itemPerPage);

 const currentItems = items.slice(startIndex,startIndex+itemPerPage);

 const nextPage =()=>{
    if(currentPage < totalPages){
        setCurrentPage((pre)=>pre+1)
    }
 }

 const previous = ()=>{
    if(currentPage >1){
        setCurrentPage((pre)=>pre-1);
    }
 }
    return (
    <div style={{width:"400px",margin:"50px auto"}}>
        <h2>Pagination</h2>
        <div>
            {currentItems.map((item,i)=>(
                <ul key={i} >{item}</ul>
            ))}
        </div>
            <button disabled={currentPage===1} onClick={previous} >pre</button>
        {Array.from({length:totalPages},(_,i)=>(
            <button onClick={()=>setCurrentPage(i+1)} key={i} style={{fontWeight:currentPage === i+1 ? "bold":"normal"}}>
                {i+1}
            </button>
        ))}
        <button onClick={nextPage}>next</button>
    </div>
  )
}

export default Pagination