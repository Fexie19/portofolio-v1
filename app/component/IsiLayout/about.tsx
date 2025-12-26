
const About = () => {
  const judul = "About Me";
  const isi1 = "Hi, it's me Dafa. A Full Stack Devolper and Visual Effect Designer from Bekasi, Indonesia, Studying at IPB University.";
  const isi2 = "ini paragraf 2";

  return(
    <>
      <div className="h-fit flex justify-center flex-col animate-fadeIn">
        <h1 className="font-bold text-4xl text-neutral-200 mb-5">
          {judul}
        </h1>
        <p className="text-xl text-neutral-200 mb-10">
          {isi1}
        </p>
        <p className="text-xl text-neutral-200 mb-10">
          {isi2}
        </p>
      </div>
    </>
  )
}

export default About