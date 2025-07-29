import ChatApp from "./components/ChatApp"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Generative from "./components/Generative"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"



const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <ChatApp />
      <Generative />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App