

import Card from '../utils/Card'


const Feature = () => {

  return (
    <section
     className='mx-auto -mt-117 flex flex-col items-center w-[95%] pb-[10%] feature-section'
    >
      <h1 className='md:text-[45px] text-[36px] top-[9%] max-w-[600px] text-center text-white m-[90px]'>Chat Smarter, Not Harder. with CBRAIN</h1>  

      <div className='absolute top-[50%] left-[50%] feature-gradient'/>

      <div

      className='w-[100%] flex flex-wrap justify-center gap-[45px]'>
        <Card 
        title="Ask Anything"
        desc="Let's users quickly find answers to their questions without having to search through multiple sources."
        img="images/feature1.png"
        />

        <Card 
        title="Improve Everyday"
        desc="The app uses natural language processing to understand user queries and provide accurate and relevant response."
        img="images/feature2.png"
        />

        <Card 
        title="Connect Everywhere"
        desc="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
        img="images/feature3.png"
        />

        <Card 
        title="Fast Responding"
        desc="Let's users quickly find answers to their questions without having to search through multiple resources."
        img="images/feature4.png"
        />
        <Card 
        title="Multilingual Support"
        desc="Talk in your language-our chatbot understands and replies in multiple language for global access."
        img="images/feature3.png"
        />
        <Card 
        title="Real-Time Assistance"
        desc="Get instant support as you chat-perfect for quick help during studies, work, or creative tasks."
        img="images/feature2.png"
        />
        
      </div>
    </section>
  )
}

export default Feature