import { Github, Linkedin, MenuIcon, XIcon, Youtube } from "lucide-react"
import Button from "../utils/Button"
import { useState } from "react"
import { BiLogoDiscord } from "react-icons/bi";

const Header = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);


  return (
    <div className='container'>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-3">
        <div className="flex items-center">
          <img className='h-[36px] mr-[15px]' src="images/logo.png" alt="logo" />
          <h1 className="text-2xl">CBRAIN</h1>  
        </div>

        <ul className="hidden lg:flex justify-between w-[30%]">
          <li><a href="#">FEATURES</a></li>  
          <li><a href="#">PRICING</a></li>  
          <li><a href="#">HOW TO USE</a></li>  
          <li><a href="#">RODEMAP</a></li>  
        </ul>

        <div className="hidden lg:flex items-center ">
          <a href="#">NEW ACCOUNT</a>
          <div
          onClick={() => setShowSignIn(!showSignIn)}
          >
            <Button 
            className="w-[100px] h-[45px] ml-6"
            text="Sign In"
            />
          </div>
          {/* <div className="button-box relative w-[100px] h-[45px] ml-[27px]">
            <button className="absolute border-none text-gray-400 border-r-[10px] cursor-pointer hover:text-[#7e00d2]">SIGN IN</button>
          </div> */}
        </div>

        <div
        onClick={() =>setShowSidebar(!showSidebar)}
        className="cursor-pointer lg:hidden"
        >
            <i><MenuIcon /></i>
        </div>

        {
          showSidebar && (
            <div className="bg-black fixed top-0 left-0 w-full h-screen z-50 p-9 flex flex-col text-white gap-9">

              <div
              className="cursor-pointer"
              onClick={() => setShowSidebar(false)}
              >
                <i><XIcon /></i>
              </div>

              <ul
              className="text-6xl font-extrabold"
              >
                <li><a
                className="text-6xl"
                href="#">FEATURES</a></li>
                <li><a href="#">PRICING</a></li>
                <li><a href="#">HOW TO USE</a></li>
                <li><a href="#">ROADMAP</a></li>
              </ul>

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

              <div
              onClick={() => setShowSignIn(!showSignIn)}
              >
                <Button 
                className="w-[100px] h-[45px] "
                text="SIGN IN"
                />
              </div>

            </div>
          )
        }    

      </header> 

      {
        showSignIn && (
            <div
            className="fixed inset-0 z-50 bg-black opacity-100 flex justify-center items-center w-[54%] h-[72%] top-[19%] left-[24%] rounded-2xl"
            >
              <div
              className="flex flex-col items-center justify-center p-9"
              >
                <h1
                className="text-2xl md:text-3xl mb-6 text-white"
                >Sign In</h1>
                <input className="signin-input text-black font-extrabold text-lg md:text-xl" type="text" placeholder="User Name"/>
                <input className="signin-input text-black font-extrabold text-lg md:text-xl" type="email" placeholder="Email"/>
                <input className="signin-input text-black font-extrabold text-lg md:text-xl" type="password" placeholder="Password"/>
                {/* <div className="flex items-center justify-center flex-col"> */}
                  <button
                  className="w-[63%] bg-purple-900 p-3 rounded-2xl text-md md:text-lg text-white mt-3"
                  >Sign In</button>
                  <button
                  className="w-[63%] bg-gray-400 p-3 rounded-2xl mt-3 text-md md:text-lg text-black"
                  >Login</button>
                {/* </div> */}

                <div
                className="absolute top-[2%] right-[2%] cursor-pointer"
                onClick={() => setShowSignIn(false)}
                >
                  <XIcon />
                </div>
              </div>
            </div>
        )
      } 
    </div>
  )
}

export default Header