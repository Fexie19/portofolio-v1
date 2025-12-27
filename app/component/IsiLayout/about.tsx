import ImgProfile from "../isiSidebar/img";

const About = () => {
  const judul = "About Me";
  const isi1 = "Hi, it's me Dafa. A Full Stack Devolper and Visual Effect Designer from Bekasi, Indonesia, Studying at IPB University. Currently expanding my expertise at IPB University, I’m constantly experimenting with new tools, frameworks, and visual techniques to push my creative boundaries in both tech and digital art.";
  const isi2 = "I specialize in crafting dynamic web platforms and captivating digital visuals. With a strong foundation in both frontend and backend development, I love turning ideas into intuitive and visually engaging experiences.";

  return(
    <div className="animate-fadeIn">
      <div className="h-fit flex justify-center flex-col animate-fadeIn">
        <div className="border-b-neutral-800 border-b border-t-neutral-800 border-t w-full h-fit mb-5 ml-2">
          <h1 className="font-bold text-5xl text-neutral-200">
            {judul}
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col max-w-[50%] border-r-neutral-700 border-r pr-2 m-2">
            <p className="text-xl text-neutral-200 mb-10">
              {isi1}
            </p>
            <p className="text-xl text-neutral-200 mb-10">
              {isi2}
            </p>
          </div>
        <div className="h-20 max-w-[50%]">

        </div>
        </div>
      </div>
    </div>
  )
}

export default About