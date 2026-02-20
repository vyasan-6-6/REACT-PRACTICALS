import { useState } from "react"

 
const FormValidation = () => {
  const [formdata,setFormdata] = useState({
    name:"",email:""
  });

  const [error,setError ] = useState({});

  const validate = ()=>{
    const newErrors = {}
    if(!formdata.name.trim()){
newErrors.name = "Name is required."
    }

    if(!formdata.email.trim()){
      newErrors.email =" Email is required."
    } 
   else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)){
    newErrors.email = "Invalid Email Format"
   }

   return newErrors;
      
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    const validation = validate();

    if(Object.keys(validation).length >0){
      setError(validation);
    }
  else {
    setError({});
    alert("form submission completed.")
  }
  }
  return (
    <div> 
      <h2>Form input</h2>
      <form onSubmit={submitHandler}>
      <div>
          <input type="text" onChange={(e)=>setFormdata({...formdata,name:e.target.value})} value={formdata.name} placeholder="enter name"/>
{error.name && (<p className="text-red-600">{error.name}</p>)}
        </div>
<div>

        <input type="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})} value={formdata.email} placeholder="enter email"/>
{error.email && (<p className="text-red-600">{error.email}</p>)}
</div>

<button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FormValidation