import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faDesktop, faImage } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";


function App() {
  return (

    <header className="bg-white p-4">

      {/* Nav bar */}
      <div className="flex justify-between ">
        <ul className="flex">
          <li className="font-mono tracking-widest text-xs sm:text-xl lg:text-2xl hover:bg-slate-300 cursor-pointer">LOGO</li>
        </ul>
        <ul className="flex lg:gap-7 font-mono text-xs sm:text-lg lg:text-2xl  flex-col lg:flex-row">
          <li className="hover:bg-slate-300 cursor-pointer">ABOUT</li>
          <li className="hover:bg-slate-300 cursor-pointer"> <FontAwesomeIcon icon={faUser} /> TEAM</li>
          <li className="hover:bg-slate-300 cursor-pointer"> <FontAwesomeIcon icon={faTableCells} /> WORK</li>
          <li className="hover:bg-slate-300 cursor-pointer"> <FontAwesomeIcon icon={faEnvelope} /> CONTACT</li>
        </ul>
      </div>



      {/* Home */}

      <div className="w-full mt-4">
        <img
          className="w-full h-screen"
          src="https://wallpapers.com/images/high/dark-laptop-keyboard-with-lights-mf3etlre3t6z8vbv.webp"
          alt="A descriptive alt text"
        />
        <p className="absolute top-1/4 mt-20 left-10 lg:left-40 lg:top-48 items-center text-white text-5xl tracking-widest lg:text-5xl">Start something that matters</p>
        <p className="absolute top-2/3 left-10 lg:left-40 lg:-bottom-2/3 items-center text-white tracking-wider text-3xl lg:text-5xl ">Stop wasting valuable time with projects that just isn't you.</p>
        <button className="absolute -bottom-20 w-60 left-10 p-3 lg:left-40 lg:p-3 lg:w-auto text-2xl lg:bottom-4 bg-gray-300">Learn more and start today</button>
      </div>

      {/* About */}
      <div>
        <p className="text-center text-2xl lg:text-5xl font-thin mt-28 ">ABOUT THE COMPANY</p>
        <p className="text-center text-lg lg:text-3xl font-thin mt-7 ">Key features of our company</p>
      </div>

      <div className="grid lg:grid-cols-4 mt-11 text-center lg:text-3xl lg:mb-72">
        <div>
          <FontAwesomeIcon className="text-5xl mt-9 lg:text-7xl" icon={faDesktop} />
          <p className="mt-5">Responsive</p>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div>
          <FontAwesomeIcon className="text-5xl mt-9 lg:text-7xl" icon={faHeart} />
          <p className="mt-5">Responsive</p>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div>
          <FontAwesomeIcon className="text-5xl mt-9 lg:text-7xl" icon={faGem} />
          <p className="mt-5">Responsive</p>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div>
          <FontAwesomeIcon className="text-5xl mt-9 lg:text-7xl" icon={faGear} />
          <p className="mt-5">Responsive</p>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
      <br />

      {/* Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 w-full h-fit py-28 justify-between">
        <div>
          <p className="lg:text-4xl lg:top-24 lg:ml-20 text-4xl">We know design.</p>
          <div className="mt-12">
          <p className="lg:text-3xl font-thin text-2xl lg:ml-20 mt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod <br />
            tempor incididunt ut labore et dolore.</p>
            <img className="mr-32 rounded-2xl lg:hidden" src="https://www.w3schools.com/w3images/phone_buildings.jpg" alt="" />
          </div>
          <button className="bg-black text-white hover:bg-gray-300 hover:text-black lg:p-10 text-sm lg:text-2xl lg:ml-20 lg:mt-10 tracking-wider p-3 ml-11 mt-8">View Our Works</button>
        </div>
        <div className="mt-12">
          <img className="mr-32 rounded-2xl hidden lg:block" src="https://www.w3schools.com/w3images/phone_buildings.jpg" alt="" />
        </div>
      </div>

      {/* Team */}
      <div className="text-center ">
        <p className="mt-16 text-4xl tracking-wider lg:text-5xl font-thin">THE TEAM</p>
        <p className="mt-12 text-2xl tracking-wider lg:text-3xl font-thin">The ones who runs this company</p>
        <div className="lg:grid grid-cols-4 mt-8 lg:gap-7 bottom-10 mb-24 py-6">

          {/* 1st Photo */}
          <div className="mt-10 lg:border lg:shadow-2xl pb-9">
            <img className="w-full" src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
            <p className="text-3xl font-thin text-left mt-5 ml-5 lg:text-5xl">John Doe</p>
            <p className="text-lg font-extralight text-left mt-8 ml-5 lg:text-3xl">CEO & Founder</p>
            <p className="text-left font-thin mt-8 text-lg ml-5 lg:text-2xl">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button className="px-24 py-3 bg-gray-300 mt-6 mr-0 lg:text-2xl"><FontAwesomeIcon icon={faEnvelope} />Contact</button>
          </div>

          {/* 2nd Photo */}
          <div className="mt-10 lg:border lg:shadow-2xl">
            <img className="w-full" src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
            <p className="text-3xl font-thin text-left mt-5 ml-5 lg:text-5xl">Anja Doe</p>
            <p className="text-lg font-extralight text-left mt-8 ml-5 lg:text-3xl">Art Director</p>
            <p className="text-left font-thin mt-8 text-lg ml-5 lg:text-2xl">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button className="px-24 py-3 bg-gray-300 mt-6 mr-3 lg:text-2xl "><FontAwesomeIcon icon={faEnvelope} />Contact</button>
          </div>

          {/* 3rd Photo */}
          <div className="mt-10 lg:border lg:shadow-2xl">
            <img className="w-full" src="https://www.w3schools.com/w3images/team3.jpg" alt="" />
            <p className="text-3xl font-thin text-left mt-5 ml-5 lg:text-5xl">Mike Ross</p>
            <p className="text-lg font-extralight text-left mt-8 ml-5 lg:text-3xl">Web Designer</p>
            <p className="text-left font-thin mt-8 text-lg ml-5 lg:text-2xl">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button className="px-24 py-3 bg-gray-300 mt-6 mr-1 lg:text-2xl"><FontAwesomeIcon icon={faEnvelope} />Contact</button>
          </div>

          {/* 4th Photo */}
          <div className="mt-10 lg:border lg:shadow-2xl">
            <img className="w-full" src="https://www.w3schools.com/w3images/team4.jpg" alt="" />
            <p className="text-3xl font-thin text-left mt-5 ml-5 lg:text-5xl">Dan Star</p>
            <p className="text-lg font-extralight text-left mt-8 ml-5 lg:text-3xl">Designer</p>
            <p className="text-left font-thin mt-8 text-lg ml-5 lg:text-2xl">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button className="px-24 py-3 bg-gray-300 mt-6 mr-0 lg:text-2xl"><FontAwesomeIcon icon={faEnvelope} />Contact</button>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-neutral-600 h-auto lg:flex justify-between lg:mt-14 lg:p-36">

        {/* Partners */}
        <div className="py-6 lg:ml-28 text-white">
          <div className="justify-center flex">
            <div>
              <p className="text-3xl lg:text-6xl">14</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl">+</p>
            </div>
          </div>
          <p className="text-center lg:text-4xl">Partners</p>
        </div>


        {/* Projects Done */}
        <div className="py-6 text-white">
          <div className="justify-center flex">
            <div>
              <p className="text-3xl lg:text-6xl">55</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl">+</p>
            </div>
          </div>
          <p className="text-center lg:text-4xl">Projects Done</p>

        </div>


        {/* Happy Clients */}
        <div className="py-6 text-white">
          <div className="justify-center flex">
            <div>
              <p className="text-3xl lg:text-6xl">89</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl">+</p>
            </div>
          </div>
          <p className="text-center lg:text-4xl">Happy Clients</p>
        </div>

        {/* Meetings */}
        <div className="py-6 lg:mr-28 text-white">
          <div className="justify-center flex">
            <div>
              <p className="text-3xl lg:text-6xl">150</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl">+</p>
            </div>
          </div>
          <p className="text-center lg:text-4xl">Meetings</p>
        </div>
      </div>

      {/* Work */}
      <div>
        <div className="text-center lg:pt-40 lg:pb-28 pt-28 pb-20">
          <p className="lg:text-5xl font-thin text-3xl">OUR WORK</p>
          <p className="lg:text-3xl font-thin mt-9 text-2xl">What we've done for people</p>
        </div>
        <div className="grid lg:grid-cols-4 mb-5 mt- sm:grid-cols-2 lg:gap-7">
          {/* 1st Row 1st Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_mic.jpg" alt="" />
          {/* 1st Row 2nd Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_phone.jpg" alt="" />
          {/* 1st Row 3rd Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_drone.jpg" alt="" />
          {/* 1st Row 4th Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_sound.jpg" alt="" />
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-7 mt-8">
          {/* 2nd Row 1st Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_tablet.jpg" alt="" />
          {/* 2nd Row 2nd Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_camera.jpg" alt="" />
          {/* 2nd Row 3rd Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_typewriter.jpg" alt="" />
          {/* 2nd Row 4th Picture */}
          <img className="w-screen" src="https://www.w3schools.com/w3images/tech_tableturner.jpg" alt="" />
        </div>
      </div>

      {/* Our Skills */}
      <div className="grid lg:grid-cols-2 bg-gray-200 h-auto mt-40">
        <div className="mt-10">
          <p className="text-2xl ml-4">Our Skills.</p> <br />
          <p className="text-xl font-thin ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.</p> <br />
          <p className="text-xl font-thin ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.</p>
        </div>

        <div>
          <div className="justify-between mb-24 ml-3 mr-4 mt-7">
            <div className="justify-between mb-24 ">
              <p className="text-xl font-thin tracking-widest"><FontAwesomeIcon className="ml-1" icon={faCamera} />Photography</p>
              <div className="bg-gray-300 w-auto h-8">
                <div className="bg-gray-400 w-3/4 h-8">
                  <p className="text-white text-center p-1 ml-7">90%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-between mb-24 ">
            <p className="text-xl font-thin tracking-widest"><FontAwesomeIcon className="ml-3" icon={faDesktop} />Web Design</p>
            <div className="bg-gray-300 w-auto h-8 ml-3 mr-3">
              <div className="bg-gray-400 w-2/3 h-8">
                <p className="text-white text-center p-1 ml-7">85%</p>
              </div>
            </div>
          </div>

          <div className="justify-between mb-24">
            <p className="text-xl font-thin tracking-widest"><FontAwesomeIcon className="ml-3" icon={faImage} />Photoshop</p>
            <div className="bg-gray-300 w-auto h8 ml-3 mr-3">
              <div className="bg-gray-400 w-7/12 h-8">
                <p className="text-white text-center p-1 ml-7">75%</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact */}

      <div className="pt-28 bg-gray-300 h-auto p-3">
        <p className="text-center text-2xl m-9">CONTACT</p>
        <p className="text-center text-xl pb-9">Let's get in touch. Send us a message:</p>
        <p className="text-lg font-thin pb-7"> <FontAwesomeIcon className="ml-10 text-3xl pr-4" icon={faLocationDot} /> Chicago, US</p>
        <p className="text-lg font-thin pb-7"> <FontAwesomeIcon className="ml-10 text-3xl pr-4" icon={faPhone} /> Phone: +00 151515</p>
        <p className="text-lg font-thin pb-7"> <FontAwesomeIcon className="ml-10 text-3xl pr-4" icon={faEnvelope} /> Email: mail@mail.com</p>
        <input className="p-2 m-4 w-11/12" type="text" placeholder="Name" />
        <input className="p-2 m-4 w-11/12" type="text" placeholder="Email" />
        <input className="p-2 m-4 w-11/12" type="text" placeholder="Subject" />
        <input className="p-2 m-4 w-11/12" type="text" placeholder="Message" />
        <button className="w-auto bg-black text-white p-3 ml-4"> <FontAwesomeIcon icon={faPaperPlane} /> SEND MESSAGE</button>

        {/* Map */}

        <img className="mt-20 w-full" src="https://www.w3schools.com/w3images/map.jpg" alt="" />
      </div>
    </header>

  )
}

export default App;
