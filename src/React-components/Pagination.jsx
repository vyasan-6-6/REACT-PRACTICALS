import { useState } from "react"


const Pagination = () => {
 const item = Array.from({length:46},(_,i)=>`item ${i+1}`);
 const itemPerPage = 5;

 const [currentPage,setCurrentPage] = useState(1);

 const startIndex = (currentPage-1) * itemPerPage;
const totalPages =  Math.ceil(item.length/itemPerPage);
 const currentItems = item.slice(startIndex,startIndex+itemPerPage);

 const pre =()=>{
    if(currentPage >1){
        setCurrentPage((pre)=>pre-1);
    }
 };


 const next = ()=>{
    if(currentPage<totalPages){
        setCurrentPage((pre)=>pre+1);
    }
 }
    return (
  <>
  <div style={{margin:"50px auto", width:"400px"}}>
    <h2>Pagination</h2> 
    <ul>
        {currentItems.map((item,i)=>(
            <li key={i}>
{item}
            </li>
        ))}
        
    </ul>
    <button onClick={pre}>PRE</button>
    {Array.from({length:totalPages},(_,i)=>(
        <button key={i} onClick={()=>setCurrentPage(i+1)} style={{fontWeight:currentPage===i+1?"bold":"normal"}}>
{i+1}
        </button>
    ))}
    <button onClick={next}>NEXT</button>
  </div>
  </>
  )
}

export default Pagination