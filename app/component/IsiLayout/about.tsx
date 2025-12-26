const About = ({isi1, isi2, judul}) => {
  return(
    <>
      <div className="h-fit flex justify-center flex-col">
        <h1 className="font-bold text-4xl text-neutral-200 mb-5">
          {judul}
        </h1>
        <p className="text-xl text-neutral-200 mb-10">
          {isi1}
        </p>
        <p>
          {isi2}
        </p>
      </div>
    </>
  )
}

export default About