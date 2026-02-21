import { useState } from "react";

 
const ImageSlider = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
  ];

  const previous = ()=>{
    setCurrentIndex((pre)=>
    pre === 0 ? images.length-1 : pre-1
    )
  }

  const nextslide = ()=>{
    setCurrentIndex((pre)=> 
pre === images.length-1 ? 0 : pre+1
    )
  }

  return (
<>
    <div className="mx-auto w-200 mt-25">
        <h2>Image Slider</h2>

      <div>
        <img
        className="w-150 h-75 object-cover rounded-lg"
        src={images[currentIndex]}
        />
      </div>
      <div className="mt-3.75">
        <button onClick={previous}>pre</button>
        <button onClick={nextslide} className="ml-2.5">nextSlide</button>
      </div>
       </div>
        </>            
  )
}

export default ImageSlider