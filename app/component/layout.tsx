import { Children } from "react"
import Navbar from "./navbar"
import About from "./IsiLayout/about"
import PageResume from "./IsiLayout/resume"


const about = {
  judul : "About Me",
  isi1 : "I'm Full Stack Devolper from Bekasi, Indonesia, Studying at IPB University.",
  isi2 : "ini paragraf 2",
}

const Layout = () => {
  return(
    <div className="h-fit xl:w-7xl bg-amber-950 rounded-4xl">
      <Navbar/>
      <div className="flex m-10">
        <About isi1={about.isi1} isi2={about.isi2} judul={about.judul}/>
      </div>
      <div className="m-10 mt-20">
        <PageResume judul="Pendidikan"/>
      </div>
    </div>
  )
}

export default Layout



