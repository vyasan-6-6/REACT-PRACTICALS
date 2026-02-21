import useTheme from "../context/contextProvider"

 
 
const ShowHide = () => {
const {setShow,show} = useTheme();
  return (
    <div>
      <input type={show ? "text" :"password"}   placeholder="enter password" />
      <button onClick={()=>setShow(pre =>!pre)}>{show ? "hide":"show"}</button>
    </div>
  )
}

export default ShowHide