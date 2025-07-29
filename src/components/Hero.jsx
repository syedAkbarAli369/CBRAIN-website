

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'


const Hero = () => {

  gsap.registerPlugin(SplitText, ScrollTrigger)

  useGSAP(() => {
    

    const SplitTitle = new SplitText('#text', {type: 'words'})


    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 80%',
        end: 'bottom top',
        scrub: false,
      }
    });

    heroTimeline
    .from('#blur', {
      y: 50,
      opacity: 50,
      duration: 1,
      ease: 'power1.inOut'
    }, 0)
    .from('#icons', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
    }, 0.3)
    .from('#rings', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'
   }, 0.6)
   .from(SplitTitle.words, {
    opacity: 0,
    yPercent: 100,
    duration: 1,
    ease: 'expo.out',
    stagger: 0.09,
   }, 0.9)
   .from('#subtext', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease:'power2.out'
   }, 1.2)

  }, [])


  return (
    <section 
    id='hero'
    className='hero relative flex justify-center items-center w-[95%] h-[1600px] border border-[rgba(107,88,116,0.5)] border-b-0'>
      <img 
      id='blur'
      className='absolute w-full -top-[15%]'
      src="images/hero blur img.png" alt="blur" />
      <img 
      className='absolute w-full top-[8%] parallax'
      id='icons'
      src="images/hero icons img.png" alt="icons" />
      <img
      id='rings'
      className='absolute h-full top-[90px] opacity-40'
      src="images/hero rings icon.png" alt="rings" />

      <h1
      id='text'
      className='absolute top-[8%] text-white text-xl md:text-2xl lg:text-3xl max-w-[1000px] text-center font-serif font-semibold'
      >Discover the Endless Possibilites of AI conversation with CBRAIN</h1>
      <h3
      id='subtext'
      className='absolute top-[9%] text-gray-400 text-xs md:text-sm lg:text-md max-w-[700px] text-center leading-[30px] font-serif mt-10'
      >Unleash the power of AI with CBRAIN. Enhance your productivity with CBRAIN, the ultimate Open AI powered chat app.</h3>
      <button
      id='btn'
      className='hero-btn absolute top-[16%] w-[140px] h-[50px] font-bold text-black hover:opacity-70 hover:text-[#7e00d2] transition-all duration-300'
      >Get Started</button>

      <div className='-top-[18%] md:-top-[12%] relative w-[1000px] md:h-[550px] flex items-center justify-center rounded-[50px] bg-gradient-to-r from-[#00aaa7] via-[#7f42a7] to-[#00aaa7] bg-[length:200%] animate-gradient'>

        <div className='w-[98.5%] md:h-[98%] h-[90%] relative overflow-hidden rounded-[50px]'>
          <div className='h-[30px] w-full bg-black/30 backdrop-blur-[10px]'/>
          <img src="images/robot1.png" alt="rbt1" 
          className='w-full h-full mix-blend-hard-light'
          />
        </div>

        <div className='absolute top-[25%] -right-[15%] backdrop-blur-[10px] w-[25%] rounded-[15px]'>
          <img src="images/element1.png" alt="e1" 
          className='w-full rounded-[15px] shadow-[0_0_15px_rgba(255,255,255,0.432)]'
          />
        </div>

        <div className='absolute top-[45%] -left-[15%] backdrop-blur-[10px] w-[25%] rounded-[15px]'>
          <img src="images/element2.png" alt="e2" 
          className='w-full rounded-[15px] shadow-[0_0_15px_rgba(255,255,255,0.432)]'
          />
        </div>

      </div>

      <h4 
      id='md-text'
      className='absolute top-[45%] md:top-[60%] text-gray-400 text-[22px] text-center'>Helping people create beautiful content at CBRAIN</h4>

      <div className='flex flex-col md:flex-row justify-between items-center absolute md:bottom-[30%] bottom-[26%] gap-8 w-[90%]'>

        <div className='flex items-center'>
          <img src="images/company1.png" alt="c1"
          className='h-[50px] mr-[10px]'  
          />
          <p className='text-[20px] font-bold'>Memric</p>
        </div>

        <div className='flex items-center'>
          <img src="images/company2.png" alt="c2"
          className='h-[50px] mr-[10px]'  
          />
          <p className='text-[20px] font-bold'>Ipsum</p>
        </div>

        <div className='flex items-center'>
          <img src="images/company3.png" alt="c3"
          className='h-[50px] mr-[10px]'  
          />
          <p className='text-[20px] font-bold'>CBRAIN</p>
        </div>

        <div className='flex items-center'>
          <img src="images/company4.png" alt="c4"
          className='h-[50px] mr-[10px]'  
          />
          <p className='text-[20px] font-bold'>Quanex</p>
        </div>

        <div className='flex items-center'>
          <img src="images/company5.png" alt="c5"
          className='h-[50px] mr-[10px]'  
          />
          <p className='text-[20px] font-bold'>Synthet</p>
        </div>


{/* 
        <div>
          <img src="images/company2.png" alt="c2" />
          <p>Ipsum</p>
        </div>

        <div>
          <img src="images/company3.png" alt="c3" />
          <p>CBRAIN</p>
        </div>

        <div>
          <img src="images/company4.png" alt="c4" />
          <p>Quanex</p>
        </div>

        <div>
          <img src="images/company5.png" alt="c5" />
          <p>Synthet</p>
        </div> */}

      </div>

    </section>
  )
}

export default Hero