

import { useRef, useState } from 'react'
import { BiExtension, BiReset, BiSignal5, BiVideo, BiWifi } from 'react-icons/bi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Generative = () => {

  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  function handleMouseMove(e){
    if(!itemRef.current) return;

    const {top, left, width, height} = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.6) * 9;
    const tiltY = (relativeX - 0.6) * -9;

    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg scale3d(0.99,0.99,0.99))`)
  }

  function handleMouseLeave(){
    setTransformStyle('');
  }


  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 90,
      duration: 1,
      ease: 'power2.out'
    })
  }, [])

  return (
    <section
    ref={sectionRef}
    className='relatve flex flex-col items-center w-[95%] pt-[10%] generative'
    >
      <h1
      className='text-[36px] text-center text-white m-0'
      >Generative AI made for creators</h1>  
      <p
      className='text-[15px] text-[#806d88]'
      >CBRAIN unlocks the potential of AI-Powered Application</p>

      <div className='flex flex-col mt-9 w-full p-9 gap-9'>

        {/* grid 1 */}
        <div
        className='grid-card grid1 flex justify-center items-center'>
          <img src="images/service-1.png" alt="s1" className='absolute -mt-18 left-0 h-[90%] opacity-80 rounded-[30px] object-cover'
          />
          <div className='absolute top-[20%] right-[7%] text-white p-9'>
            <h2 className='text-[36px] font-bold'>Smartest AI</h2>
            <h4 className='text-[15px] md:text-[rgb(127,109,135)] max-w-[500px] mb-[50px] text-white'>CBRAIN unlocks the potential of AI-Powered Application</h4>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Photo Enhance
            </p>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Seamless Integration
            </p>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Photo Generation
            </p>
          </div>      
        </div>


        <div className='flex flex-col md:flex-row gap-9'>

        {/* grid 2 */}
        <div
            className='relative w-full h-[1000px] border border-[rgba(107,88,116,0.5)] rounded-[30px] overflow-hidden'
            >
                <img src="images/service-2.png" alt="s2" 
                className='absolute right-0 h-full z-[-1] rounded-[30px] object-cover'
                />  

                <div
                className='absolute top-[10%] right-[20%] h-[130px] w-[270px] bg-black rounded-[20px] [clip-path:polygon(0%_0%,100%_0%,100%_75%,75%_75%,75%_100%,50%_75%,0%_75%)]'
                ><h2
          className='w-[90%] mt-5 ml-5 text-white text-center text-lg font-semibold'
          >Hey CBRAIN, Enhance this photo</h2>
          </div>

          <h1
          className='absolute left-[10%] bottom-[36%] text-[36px] font-bold text-white'
          >Photo Editing</h1>
          <p
          className='absolute left-[10%] bottom-[10%] max-w-[400px] text-[18px] font-bold text-white'
          >Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
        </div>

        {/* grid 3 */}
        <div
        className='relative w-full h-[1000px] bg-[#15131d] rounded-[30px] overflow-hidden border border-[rgba(107,88,116,0.5)]'
        >
          <div
          className='absolute left-[5%] top-[10%] w-[90%]'
          >
            <h2
            className='text-white text-[40px] font-bold'
            >Video Generation</h2>
            <h4
            className='text-[18px] text-[rgb(127,109,135)] max-w-[500px] mb-[50px]'
            >The World's most powerful AI photo and video art generation engine. What will you create?</h4>

            <div className='flex gap-[3%] justify-between mt-[9%] flex-wrap'>

                <div className='p-[25px] bg-[#252134] rounded-[20px] text-[36px] text-white'>
                    <BiExtension />
                </div>

                <div className='p-[25px] bg-[#252134] rounded-[20px] text-[36px] text-white'>
                    <BiSignal5 />
                </div>

                <div className='p-[25px] bg-gradient-to-r from-[#a962ff] to-[#5b1f9c] rounded-[20px] text-[36px] text-white'>
                    <BiVideo />
                </div>

                <div className='p-[25px] bg-[#252134] rounded-[20px] text-[36px] text-white'>
                    <BiWifi />
                </div>

                <div className='p-[25px] bg-[#252134] rounded-[20px] text-[36px] text-white'>
                    <BiReset />
                </div>

            </div>

          </div>  

          <img src="images/service-3.png" alt="s3" className='absolute  w-[90%] left-[5%] bottom-[18%]'/>
        </div>
        </div>




        {/* grid 4 */}
        <div className='grid-card grid1 flex justify-center items-center'>
          <img src="images/service-4.png" alt="s1" className='absolute -mt-18 left-0 h-[90%] opacity-80 rounded-[30px] object-cover'
          />
          <div className='absolute top-[20%] right-[7%] text-white p-9'>
            <h2 className='text-[36px] font-bold'>Smartest AI</h2>
            <h4 className='text-[15px] md:text-[rgb(127,109,135)] text-white max-w-[500px] mb-[50px]'>CBRAIN unlocks the potential of AI-Powered Application</h4>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Music Generating
            </p>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Voice Enhance
            </p>
            <p className='flex items-center text-white text-[15px]  border-t border-[rgba(107,88,116,0.5)] pt-[10px]'>
              <img src="images/Check circle.png" alt="circle" className='h-[36px] mr-[20px]'/>  
              Seamless Integration
            </p>
          </div>      
        </div>

      </div>
    </section>
  )
}

export default Generative