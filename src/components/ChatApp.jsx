import { useRef } from "react"
import Button from "../utils/Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const ChatApp = () => {

  const containerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      defaults: {ease: 'power2.out', duration: 0.9}
    });

    tl.from(leftRef.current, {x: -90, opacity: 0})
    tl.from(rightRef.current, {x: 90, opacity: 0})

  }, [])

  return (
    <section
    ref={containerRef}
    className="w-[95%] mx-auto flex my-24 md:flex-row gap-9 flex-col items-center border-2 border-[rgba(107,88,116,0.5)] border-b-0 p-3 rounded-xl">

      <div ref={leftRef} className="flex flex-col ml-[10%] mt-9 md:-mt-9">
        <h1 className="md:text-[36px] text-[27px] max-w-[700px] mb-9">AI Chat App for Seamless Collaboration</h1>
        <p className="flex items-center text-[21px]">
            <img className="h-[30px] mr-[20px]" src="images/Check circle.png" alt="circle" />
            Seamless Integration
        </p>

        <h2 
        className="max-w-[400px] text-[15px] text-[rgb(127,109,125)] "
        >With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</h2>

        <p className="flex items-center text-[21px] mt-3">
            <img
            className="h-[30px] mr-[20px]"
            src="images/Check circle.png" alt="circle" />
            Smart Automation
        </p>
        <p className="flex items-center text-[21px] mt-3">
            <img src="images/Check circle.png" alt="circle" 
            className="h-[30px] mr-[20px]"
            />
            Smart Workflow
        </p>

        <div className="m-0 mr-[40px] w-[150px] h-[50px]">
            <Button 
            text="TRY IT NOW"
            className="w-[150px] h-[50px] mt-9"
            />
            {/* <button>TRY IT NOW</button> */}
        </div>
      </div>  

      <div ref={rightRef} className="flex flex-col items-center mt-[24%] mr-[5%]">
        <h2 className="max-w-[400px] text-[30px] text-[rgb(127,109,135)]">With smart automation and top-notch security</h2>
        <img 
        className="w-[70%]"
        src="images/tools group.png" alt="tools" />
      </div>
    </section>
  )
}

export default ChatApp