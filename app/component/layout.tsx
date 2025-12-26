"use client"
import { useState } from "react"
import About from "./IsiLayout/about"
import PageResume from "./IsiLayout/resume"


const Navbutton = ({ label, onClick, active }:any) => {
  return (
    <button
      className={`text-neutral-300 outline-neutral-600 font-bold text-2xs xl:text-3xs rounded-3xl p-5 pt-3 pb-3 m-3 hover:bg-neutral-800 hover:outline-neutral-600 hover:outline-1 transition duration-300 ease-out hidden md:block
        ${active 
          ? "bg-neutral-800 outline-1 outline-neutral-600" 
          : ""
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const Navbar = ({ activePage, onNavClick }:any) => {
  return (
    <div className="max-h-17 bg-neutral-1000 flex items-center justify-center rounded-3xl">
      <nav className="flex gap-5 lg:gap-10 mr-10 ml-10">
        <Navbutton label="About" active={activePage==="about"} onClick={() => onNavClick("about")} />
        <Navbutton label="Resume" active={activePage==="resume"} onClick={() => onNavClick("resume")} />
        <Navbutton label="Portfolio" active={activePage==="portfolio"} onClick={() => onNavClick("portfolio")} />
        <Navbutton label="Social" active={activePage==="social"} onClick={() => onNavClick("social")} />
        <Navbutton label="Contact" active={activePage==="contact"} onClick={() => onNavClick("contact")} />
      </nav>
    </div>
  )
}

export default function Layout() {
  const [activePage, setActivePage] = useState("about")

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />
      case "resume":
        return <PageResume/>
      default:
        return <div className="text-white">kosong bang</div>
    }
  }

  return (
    <div className="min-h-screen xl:max-h-screen xl:w-7xl bg-neutral-900 rounded-4xl border-neutral-700 border overflow-y-scroll scrollbar-hide">
      <Navbar activePage={activePage} onNavClick={setActivePage} />
      <div className="flex m-10 animate-fadeIn">
        {renderPage()}
      </div>
    </div>
  )
}
