import Image from "next/image";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebarleft";
import Layout from "./component/layout";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center gap-10 m-5 xl:m-15 xl:flex-row xl:max-w-screen xl:max-h-screen animate-fadeIn">
        <Sidebar/>
        <Layout/>
    </div>
  );
}
