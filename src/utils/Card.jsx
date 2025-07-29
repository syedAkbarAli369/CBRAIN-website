
import {useGSAP} from '@gsap/react'
import { useRef, useState } from 'react'


const Card = ({title, desc, img}) => {

    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef();

    function handleMouseMove(e){
      if(!itemRef.current) return;

      const {left, top, width, height} = itemRef.current.getBoundingClientRect();

      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      const tiltX = (relativeY - 0.9) * 9;
      const tiltY = (relativeX - 0.9) * -9;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99,0.99,0.99)`

      setTransformStyle(newTransform);

    }

    function handleMouseLeave(){
      setTransformStyle('')
    }


    return (
    <div className='relative w-[30%] min-w-[270px] h-[450px] bg-[rgb(17,14,27)] feature-card'
    ref={itemRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{transform: transformStyle}}
    >
      <h2 className='absolute top-[9%] left-[5%] text-[27px]'>{title}</h2>
      <p className='absolute top-[24%] mt-6 left-[5%] max-w-[300px] text-[15px] text-[rgb(127,109,135)] '>{desc}</p>
        <div className="absolute left-[10%] bottom-[9%] right-[9%] flex items-center justify-between explore-more">
          <img src={img} alt="f1" className='w-[72px]' />
          <a href="#">Explore More</a>
        </div>

         <img src="images/features back img.png" alt="fb" className="feature-back-img" />
       </div>
    )
}

export default Card