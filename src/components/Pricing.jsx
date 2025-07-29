import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PriceCard = ({h1, h2, h3, p1, p2, p3, className}) => {
    return (
      <div
      className="flex flex-col items-center justify-between w-[90%] h-[900px] price-box"
      >
        <h1
        className={className}
        >{h1}</h1>
        <h2>{h2}</h2>
        <h3
        className="text-[81px] mt-9 mb-[30px]"
        >${h3}</h3>
        <button
        className="pricing-btn"
        >GET STARTED</button>

        <p
        className="flex items-center justify-start text-[20px] text-[rgb(127,109,135)] max-w-[500px] border-t-2 pt-[20px] m-0"
        >
            <img src="images/Check circle.png" alt="circle" 
            className="h-[36px] mr-[20px]"
            />
            {p1}
        </p>
        <p
        className="flex items-center text-[20px] text-[rgb(127,109,135)] max-w-[500px] border-t-2 pt-[20px] m-0"
        >
            <img src="images/Check circle.png" alt="circle" 
            className="h-[36px] mr-[20px]"
            />
            {p2}
        </p>
        <p
        className="flex items-center text-[20px] text-[rgb(127,109,135)] max-w-[500px] border-t-2 pt-[20px] m-0"
        >
            <img src="images/Check circle.png" alt="circle" 
            className="h-[36px] mr-[20px]"
            />
            {p3}
        </p>
      </div>  
    )
}


const Pricing = () => {

  const globeRef = useRef(null);

  useGSAP(() => {
    gsap.to(globeRef.current, {
      rotate: 270,
      duration: 6,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: globeRef.current,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none none',
        scrub: true,
      }
    })

  }, [])

  return (
    <section
    className="w-[95%] py-45 md:py-27 border border-[rgba(107,88,116,0.5)] border-t-0 border-b-0 flex flex-col items-center justify-center gap-9"
    >
      <div
      className="relative w-[85%] flex flex-col items-center justify-center"
      >
        <img 
        className="w-full max-w-[1000px] object-contain mt-9"
        src="images/pricing-parallax.png" alt="pp" />
        <img 
        ref={globeRef}
        className="w-[350px] -mt-90"
        src="images/magical-glob.png" alt="globe" />
      </div>  

      <h1
      className="text-3xl text-white font-bold text-center"
      >
        Pay once, use forever
      </h1>
      
      <div className="flex flex-col lg:flex-row w-[95%] items-center justify-between gap-[20px]">
        <PriceCard 
        h1="Basic" h2="AI-powered chatbot with personalized recommendations tailored to your needs" h3="0"
        p1="AI chatbot that understand your queries" 
        p2="Get personalized recommendation" 
        p3="Access to basic tools and features"
        className="text-[45px] text-[#ffc786] mb-[20px] font-bold"
        />  
        <PriceCard 
        h1="Premium" h2="Advanced AI chatbot, priority support, analytics dashboard" h3="9.99"
        p1="Priority access to advanced AI tools" 
        p2="Photo and video editing with AI enhancements" 
        p3="Faster response times and fewer limits"
        className="text-[45px] text-[#7e00d2] mb-[20px] font-bold"
        />  
        <PriceCard 
        h1="Enterprise" h2="Custom AI chatbot, advanced analytics, dedicated account" h3="99.99"
        p1="All premium features plus unlimited usage" 
        p2="Team collaboration and multi-user access" 
        p3="Dedicated support and custom AI solutions"
        className="text-[45px] text-[#ff776f] mb-[20px] font-bold"
        />  
      </div>  

      <a href="#"
      className="text-white text-[24px] mt-[69px] border-b-2"
      >SEE THE FULL DETAILS</a>  
    </section>
  )
}

export default Pricing