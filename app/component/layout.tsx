"use client"
import { useState } from "react"
import About from "./IsiLayout/about"
import PageResume from "./IsiLayout/resume"
import Navbar from "./navbar"
import HomeAwal from "./IsiLayout/home"



export default function Layout() {

  return (
    <div className="min-h-screen xl:max-h-screen xl:w-full bg-gray-950 border-neutral-700 border overflow-y-scroll scrollbar-hide">
      <Navbar/>
      <div className="divide-y divide-neutral-800 gap-5 flex flex-col">
        <HomeAwal/>
        <div className="flex m-10 animate-fadeIn outline-1 outline-neutral-800 p-5">
          <About />
        </div>
        <div className="flex m-10 animate-fadeIn outline-1 outline-neutral-800 p-5">
          <PageResume/>
        </div>
      </div>
    </div>
  )
}
