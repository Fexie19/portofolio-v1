import Image from "next/image";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebarleft";
import Layout from "./component/layout";
export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen justify-center gap-10 m-5 xl:m-15 xl:flex-row xl:max-w-screen xl:h-8xl opacity-100 transition-opacity duration-1000 ease-in-out">
        <Sidebar/>
        <Layout/>
    </div>
  );
}
