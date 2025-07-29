import { Github, Linkedin, Youtube } from "lucide-react"
import { BiLogoDiscord } from "react-icons/bi"



const Footer = () => {
  return (
    <footer
    className="footer-section mt-9"
    >
      <h1
      className="ml-[5%] text-gray-400"
      >©️2025, Made with ❤️ by CheelCompanyLtd.</h1>  

      <div
      className="mr-[5%] flex gap-[18px]"
      >
        <a href="#">
          <Youtube className="w-9 h-9 hover:text-red-500 transition"/>  
        </a>
        <a href="#">
          <BiLogoDiscord className="w-9 h-9 hover:text-purple-900 transition"/>  
        </a>
        <a href="#">
          <Linkedin className="w-9 h-9 hover:text-blue-500 transition"/>  
        </a>
        <a href="#">
          <Github className="w-9 h-9 hover:text-gray-500 transition"/>  
        </a>
      </div>
    </footer>
  )
}

export default Footer