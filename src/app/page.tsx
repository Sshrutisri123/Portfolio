import Navbar from "@/app/components/Navbar/navbar";
import Home_model from "@/app/components/3D_models/home_model";
import Circular_text from '@/app/components/circular_text/circularText'
import ResumeButton from "./components/Buttons/resumeButton";
import FourModels from "./components/3D_models/fourModels";
import Visit from './components/Buttons/visit';
import Github from './components/Buttons/github';
import Techstack from './components/techstack/techstack';
import Footer from './components/footer/footer';
import CreativeDev from "./components/homepageitems/CreativeDev";
import SubtitleText from "./components/subtitle/Subtitle";

export default function Home() {

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />

      <main className="flex flex-col pt-16 mt-8 sm:mt-8 sm:pt-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full">
        {/* creative developer */}
        <CreativeDev />

        {/* 3D model */}
        <div className="h-60 flex justify-center items-center">
          <Home_model />
        </div>

        {/* subtitle section */}
        <div className="text-black font-normal text-xs sm:text-xl mt-4 sm:mt-10 flex flex-col justify-center items-center">
          <SubtitleText />

          <div className="mt-4 sm:mt-2 flex space-x-4 ">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-lg text-gray-700">Available to work</p>
            </div>
            <div>
              <ResumeButton />
            </div>
          </div>

        </div>
      </main>

      {/* circular text */}
      <div className="ml-8 sm:ml-28 mt-8 fixed bottom-10 z-40 hidden sm:block">
        <Circular_text />
      </div>

      {/* imaginary div to prevent overlapping */}
      <div className="h-dvh w-full bottom-4">
      </div>

      <div className="z-50 w-full flex-col justify-center items-center bg-gray-100 space-y-2 sm:space-y-20">

        <div className="sm:hidden px-7 py-40 space-y-4">
          <h2 className="text-base font-medium text-black">I’m Shruti — a software developer and UI/UX designer. I build user-friendly apps by blending clean code with creative design.</h2>
          <h2 className="text-base font-medium text-black ">Specializing in full-stack development, I turn ideas into smooth, high-performing digital products.</h2>
          <h2 className="text-base font-medium text-black">Passionate about technology and creativity, I constantly explore new tools and design trends to craft better apps.</h2>
          <h2 className="text-base font-medium text-black">Based in India, I’m open to work and collaborations from 10 AM to 8 PM (IST).</h2>
        </div>

        <div className="hidden relative w-full sm:flex justify-center items-center">
          {/* 3D Model Component */}
          <FourModels />

          {/* Transparent Glassmorphic Card Overlay */}
          <div className="absolute top-[55%] -translate-y-1/2 w-80 sm:w-200 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border space-y-5 border-white/20">
            <h2 className="text-xl font-medium text-black">I’m Shruti — a software developer and UI/UX designer. I build user-friendly apps by blending clean code with creative design.</h2>
            <h2 className="text-xl font-medium text-black ">Specializing in full-stack development, I turn ideas into smooth, high-performing digital products.</h2>
            <h2 className="text-xl font-medium text-black">Passionate about technology and creativity, I constantly explore new tools and design trends to craft better apps.</h2>
            <h2 className="text-xl font-medium text-black">Based in India, I’m open to work and collaborations from 10 AM to 8 PM (IST).</h2>
          </div>

          <div className="absolute bottom-0 right-0 bg-gray-100 w-40 h-20"></div>
        </div>

        {/* selected word section */}
        <div className="sm:p-12 pb-4">
          <div className="sm:flex flex flex-col justify-center gap-y-1 sm:gap-y-3 items-center">

            <h1 className="text-black justify-center items-center text-3xl sm:text-7xl font-bold">  Projects I&apos;ve done
            </h1>
            <h2 className="text-gray-600 text-sm sm:text-xl text-center mt-2">
              Crafting web applications that drive growth and innovation. Explore some of my work below.
            </h2>
            {/* <hr className="text-black mt-5" /> */}
          </div>


          {/* NOTIFY FINDER */}
          <div className="bg-zinc-300 gap-6 mt-7 sm:mx-40 mx-5 p-5 sm:py-14 sm:px-14 rounded-2xl">
            <div className="gap-6 flex flex-col">
              <div className="flex flex-col sm:items-center sm:flex-row w-full space-x-4">
                {/* Logo Section */}
                <img src="/logo1.jpg" alt="Project 1" width="60" height="60" className="rounded-lg sm:rounded-2xl sm:w-[60px] w-[50px]" />

                {/* Text Section */}
                <div className="flex flex-col">
                  <h2 className="text-black text-xl sm:text-2xl font-bold">Notify-App ⎯⟡ Smart Note Keeper:
                  </h2>
                  <p className="text-gray-600 text-sm sm:font-normal">A seamless app to save and organize notes, documents, and more—effortlessly. 🚀
                  </p>
                </div>

                {/* Button Section (Aligned to the Right) */}
                <div className="hidden sm:flex sm:items-center space-x-3 ml-auto">
                  <a
                    href="https://github.com/Sshrutisri123/Note-app-main"
                    target="_blank"
                    className="bg-black rounded-xl">
                    <Github />
                  </a>
                  <a
                    href="https://note-app-main.vercel.app"
                    target="_blank"
                    className="bg-black rounded-xl"><Visit />
                  </a>
                </div>

                {/* <div className="hidden sm:flex space-x-2  ml-auto ">
                  <a
                    href="https://note-app-main.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-black text-white   "
                  >
                    Visit Site
                  </a>
                  <a
                    href="https://github.com/Sshrutisri123/Note-app-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-black text-white px-4 py-2 rounded-xl inline-block"
                  >
                    Github
                  </a>
                </div> */}
              </div>

              <div className="px-7 sm:mt-9 mt-4 flex justify-center">
                <img
                  src="/Project1.png"
                  alt="Project 1"
                  className="rounded-2xl mx-auto"
                  width="1000"
                  height="200"
                />
              </div>

            </div>
          </div>

          {/* RECIPE FINDER */}
          <div className="bg-pink-100 gap-6 mt-7 sm:mx-40 mx-5 p-5 sm:py-14 sm:px-14 rounded-2xl">
            <div className="gap-6 flex flex-col">
              <div className="flex flex-col sm:items-center sm:flex-row   w-full space-x-4">
                {/* Logo Section */}
                <img src="/food.jpg" alt="Project 1" width="60" height="60" className="rounded-lg sm:rounded-2xl sm:w-[60px] w-[50px]" />
                {/* Text Section */}
                <div className="flex flex-col">
                  <h2 className="text-black text-xl sm:text-2xl font-bold">Recipe Finder ⎯⟡ Recipe Companion:
                  </h2>
                  <p className="text-gray-600 text-sm sm:font-normal">Discover, save, and share mouthwatering recipes effortlessly. Cooking made fun and easy! 🍽️✨</p>

                </div>

                {/* Button Section (Aligned to the Left with Gap) */}
                {/* Button Section (Aligned to the Right) */}
                <div className="hidden cursor-pointer  text-white sm:flex sm:items-center space-x-3 ml-auto">
                  <a href="https://github.com/Sshrutisri123/recipe-finder"
                    target="_blank"
                    className="bg-[#FF6090] rounded-xl"

                  ><Github /></a>
                  <a
                    href="https://sshrutisri123.github.io/recipe-finder/"
                    target="_blank"
                    className="bg-[#FF6090] rounded-xl"><Visit /></a>
                </div>


                {/* <div className="hidden sm:flex space-x-3 ml-auto ">
                  <a
                    href="https://sshrutisri123.github.io/recipe-finder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-black text-white px-4 py-2 rounded-xl inline-block"
                  >
                    Visit Site
                  </a>
                  <a
                    href="https://github.com/Sshrutisri123/recipe-finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-black text-white px-4 py-2 rounded-xl inline-block"
                  >
                    Github
                  </a>
                </div> */}
              </div>

              <div className="px-7 sm:mt-9 mt-4 flex justify-center">
                <img src="/a.png" alt="Project 1" className="rounded-2xl" width="1500" height="20" />
              </div>
            </div>
          </div>
        </div>

        {/* tech stack */}

        <div className="sm:p-12 pb-4">
          <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4">
            <h1 className="text-black text-3xl sm:text-7xl font-bold text-center">
              Tech Stack
            </h1>
            <h2 className="text-gray-600 text-sm sm:text-xl text-center mt-2">
              Building scalable and high-performance web applications with modern technologies.
              Explore my expertise below.
            </h2>
            {/* <hr className="border-black mt-5 w-full sm:w-3/4" /> */}
          </div>
        </div>

        <Techstack />


        {/* My Expertise Section */}
        <div className="sm:p-12 pb-6 mt-10">
          <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4">
            <h1 className="text-black text-3xl sm:text-7xl font-bold text-center">
              My Expertise
            </h1>
            {/* <hr className="bg-[#A0A0A0] w-full "></hr> */}
          </div>

          {/* Expertise Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-20 gap-6 sm:gap-20">

            {/* UI/UX DESIGN */}
            <div className="relative bg-white shadow-lg rounded-2xl p-14 h-[414px] sm:w-[320px] w-72 transition-transform transform hover:scale-105">
              <div className="absolute bg-pink-500 w-15 top-45 right-35 blur-2xl h-15"></div>

              <span className="text-gray-400 text-lg font-semibold">01</span>
              <h3 className="text-black font-bold text-3xl mt-2">UI/UX DESIGNS</h3>
              <p className="text-gray-600 tracking-wider text-xl mt-10">
                Turning ideas into intuitive designs —
                because great UI is silent, but impactful.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute bottom-7 cursor-pointer right-6 bg-black w-10 h-10 flex text-3xl items-center justify-center rounded-full text-white ">
                ↗
              </span>
            </div>

            {/* FRONTEND DEVELOPMENT */}
            <div className="relative bg-white shadow-lg rounded-2xl p-14 h-[414px] sm:w-[320px] w-72 transition-transform transform hover:scale-105">
              <div className="absolute bg-blue-500 w-10 top-10 right-15 blur-2xl h-15"></div>
              <div className="absolute bg-red-500 w-15 top-70 right-45 blur-2xl h-15"></div>

              <span className="text-gray-400 text-lg font-semibold">02</span>
              <h3 className="text-black font-bold text-3xl mt-2">FRONTEND DEVELOPMENT</h3>
              <p className="text-gray-600 tracking-wider text-xl mt-10">
                Turning ideas into intuitive designs —
                because great UI is silent, but impactful.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute bottom-7 cursor-pointer right-6 bg-black w-10 h-10 flex text-3xl items-center justify-center rounded-full text-white ">
                ↗
              </span>
            </div>

            {/* FULL-STACK DEVELOPMENT */}
            <div className="relative bg-white shadow-lg rounded-2xl p-14 h-[414px] sm:w-[320px] w-72 transition-transform transform hover:scale-105">
              <div className="absolute bg-green-500 w-15 top-45 right-35 blur-2xl h-15"></div>

              <span className="text-gray-400 text-lg font-semibold">03</span>
              <h3 className="text-black font-bold text-3xl mt-2">FULL-STACK DEVELOPMENT</h3>
              <p className="text-gray-600 tracking-wider text-xl mt-10">
                Engineering end-to-end solutions—
                seamless frontend, powerful backend.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute cursor-pointer bottom-7 right-6 bg-black w-10 h-10 flex text-3xl items-center justify-center rounded-full text-white ">
                ↗
              </span>
            </div>

          </div>
        </div>



        <Footer />



      </div>


    </div >
  );
}
