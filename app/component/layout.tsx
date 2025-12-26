import { Children } from "react"
import Navbar from "./navbar"
import About from "./IsiLayout/about"
import PageResume from "./IsiLayout/resume"




const Layout = () => {
  return(
    <div className="h-fit xl:w-7xl bg-amber-950 rounded-4xl">
      <Navbar/>
      <div className="flex m-10">
        <About/>
      </div>
      <div className="m-10 mt-20">
        <PageResume judul="Pendidikan"/>
      </div>
    </div>
  )
}

export default Layout



