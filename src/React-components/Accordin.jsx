 
import { useState } from "react"

const Accordin = () => {
 const [show , setShow] = useState(null)
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
   const toggleHandler = (index)=>{
setShow(show ===index ? null : index)
   }
    return (
    <>
    <div className="w-100 mt-12.5 mx-auto">
        <h2>FAQ's</h2>
 {faqs.map((faq,index)=>(
    <div key={index} className="border border-gray-500" onClick={()=>toggleHandler(index)}>
        <strong>{faq.question}</strong>
      {show===index && (
          <div>{faq.answer}</div>
      )}
    </div>

 ))}
    </div>
    </>
  )
}

export default Accordin