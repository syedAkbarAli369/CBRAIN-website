import Button from "../utils/Button"


const RoadmapCard = ({src, h2, p}) => {
    return(
        <div
        className="relative lg:h-[1000px] w-[90%] md:w-[45%] overflow-hidden rdmp-card p-3 flex flex-col justify-start items-center"
        >
            <img
            className="mb-9 w-[100%]"
            src={src} alt="r1" />
            <h2
            className="lg:text-[45px] text-[33px] mb-6"
            >{h2}</h2>
            <p
            className="lg:text-[24px] text-[18px] text-[rgb(127,109,135)] p-3"
            >{p}</p>
        </div>
    )
}

const Roadmap = () => {

  return (
    <section
    className="relative flex flex-col items-center justify-center w-[95%] border-t-0"
    >
      <h1
      className="lg:text-[69px] text-[54px] text-center"
      >What we're working on</h1>  


      <div
      className="w-[100%] flex items-center justify-center flex-wrap flex-col md:flex-row gap-[30px] max-w-[1600px]"
      >
        <RoadmapCard 
        src="images/roadmap-1.png"
        h2="Voice Recognition"
        p="Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
        />

        <RoadmapCard 
        src="images/roadmap-2.png"
        h2="Realtime Suggestion"
        p="Instantly get relevant responses and suggestion from the chatbot as you type, improving speed and accuracy during conversations."
        />

        <RoadmapCard 
        src="images/roadmap-3.png"
        h2="Multilingual Support"
        p="Commuinicate with the chatbot in multiple languages, breaking language barriers and improving accessibility for diverse users."
        />

        <RoadmapCard 
        src="images/roadmap-4.png"
        h2="Smart Context Memory"
        p="The chatbot remembers previous interactions to provide more personalized and meaningful responses based on user history"
        />

        <div className="flex items-center justify-center p-3">
          <Button 
          text="OUR ROADMAP"
          className="w-[100px] h-[45px]"
          />
          {/* <button>OUR ROADMAP</button> */}
        </div>


      </div>
    </section>
  )
}

export default Roadmap