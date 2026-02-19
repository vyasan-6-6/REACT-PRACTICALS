import { useState } from "react"

const Accordin = () => {
    const [show,setShow] = useState(null)
  const faqs = [
     {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React hook used to manage component state.",
    },
    {
      question: "What is an Accordion?",
      answer: "An accordion shows and hides content when clicked.",
    },
  ]
  const toggleHandle = (i)=>{
   setShow(show===i ?null :i)
  }
    return (
    <>
   <div  className="w-[400px] mt-[50px] mx-auto">
        <h2>FAQ</h2>
        {faqs.map((faq,index)=>(
            <div key={index} className="cursor-pointer border border-gray-400 mb-2.5 p-2.5 " >
                <div onClick={()=>toggleHandle(index)} className="mt-2.5">{faq.question}</div>
                {show ===index &&(
                    <div>{faq.answer}</div>
                )}
            </div>
        
        ))}
    </div>
    
    </>
  )
}

export default Accordin