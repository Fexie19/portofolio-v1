import Link from "next/link"


const Navbutton = ({isi}) => {
  return(
    <>
      <Link className="text-neutral-300 font-bold rounded-xl p-3 hover:bg-neutral-800 m-3 hover:outline-neutral-400 hover:outline-1" href="">{isi}</Link>
    </>
  )
}



const Navbar = () => {
  return(
    <>
      <div className="max-h-17 bg-neutral-900 flex items-center justify-center rounded-3xl">
          <nav className=" flex gap-10 mr-10 ml-10">
          <Navbutton isi ="About"/>
          <Navbutton isi ="Resume"/>
          <Navbutton isi ="Portfolio"/>
          <Navbutton isi ="Social"/>
          <Navbutton isi ="Contact"/>
        </nav>
      </div>
    </>
  )
}


export default Navbar