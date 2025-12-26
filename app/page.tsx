import Image from "next/image";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebarleft";
import Layout from "./component/layout";
export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen justify-center gap-16 m-10 xl:flex-row xl:max-w-screen xl:h-8xl">
        <Sidebar/>
        <Layout/>
    </div>
  );
}
