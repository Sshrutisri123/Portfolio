const TechStackAnimation = () => {

    const techStack1 = [
      { src: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000", alt: "Express js logo" },
      { src: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000", alt: "React js logo" },
      { src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", alt: "figma logo" },
      { src: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000", alt: "VS Code logo" },
      { src: "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000", alt: "Supabase logo" },
      { src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", alt: "C++ logo" },
      { src: "https://img.icons8.com/?size=100&id=r9QJ0VFFrn7T&format=png&color=000000", alt: "Chakra UI logo" },
      { src: "https://img.icons8.com/?size=100&id=DiGZkjCzyZXn&format=png&color=000000", alt: "Cursor logo" },
      { src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000", alt: "Docker logo" },
      { src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", alt: "Git logo" },
      { src: "https://img.icons8.com/?size=100&id=63777&format=png&color=000000", alt: "GitHub logo" },
      { src: "https://img.icons8.com/?size=100&id=24895&format=png&color=000000", alt: "Npm logo" },
      { src: "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000", alt: "material ui logo" },
    ];
  
    const techStack2 = [
      { src: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000", alt: "Firebae logo" },
      { src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000", alt: "Bootstrap logo" },
      { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "tailwind logo" },
      { src: "https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000", alt: "vite logo" },
      { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "typescript logo" },
      { src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", alt: "python logo" },
      { src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", alt: "Nodejs logo" },
      { src: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", alt: "nextjs logo" },
      { src: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000", alt: "mongodb logo" },
      { src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", alt: "javascript logo" },
      { src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", alt: "html logo" },
      { src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", alt: "Css logo" },
      { src: "https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000", alt: "chatgpt logo" }
    ]
  
  
  
    return (
      <div className="relative  flex pt-6 pb-20 flex-col justify-evenly gap-y-6 z-40 overflow-hidden">
  
        <div className="absolute z-50 right-0 backdrop-blur-sm w-10 sm:w-46 h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 80%, rgba(0, 0, 0, 1) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 80%, rgba(0, 0, 0, 1) 100%)",
              backgroundColor: "rgb(243, 244, 246)",
          }}>
        </div>
  
        <div className="absolute z-50 left-0  backdrop-blur-sm w-10 sm:w-46 h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%, rgba(0, 0, 0, 0) 100%)",
              backgroundColor: "rgb(243, 244, 246)",
          }}>
        </div>
  
        {/* first row */}
        <div className="flex w-max space-x-11 sm:space-x-14 whitespace-nowrap animate-marquee-reverse ">
          {[...techStack1, ...techStack1, ...techStack1, ...techStack1, ...techStack1].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-3 flex justify-center items-center shadow-2xl drop-shadow-2xl rounded-2xl">
              <img className="w-6 h-6 sm:w-10 sm:h-10" src={tech.src} alt={tech.alt} />
            </div>
          ))}
        </div>
  
        {/* second row */}
        <div className="flex w-max space-x-11 sm:space-x-14 whitespace-nowrap animate-marquee">
          {[...techStack2, ...techStack2, ...techStack2, ...techStack2, ...techStack2].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-3 flex justify-center items-center shadow-2xl drop-shadow-2xl rounded-2xl">
              <img className=" w-6 h-6 sm:w-10 sm:h-10" src={tech.src} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default TechStackAnimation