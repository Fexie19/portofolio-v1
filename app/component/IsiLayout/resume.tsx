
interface template {
  satu: string;
  tahun : string;
  des: string;
}

const pendidikan1: template = {
  satu : "SDI Al-Amal",
  tahun: "2013 - 2019",
  des: "Menempuh pendidikan Sekolah Dasar di SDI Al-Amal",
}

const pendidikan2: template = {
  satu: "MTsN 42 Jakarta",
  tahun : "2019 - 2022",
  des : "Menempuh pendidikan Sekolah Menengah Pertama di MTsN 42 Jakarta",
}

const pendidikan3: template = {
  satu : "SMAN 5 Kota Bekasi - SMAN 5 Kota Pekanbaru",
  tahun : "2022 - 2025",
  des : "Sempat menempuh pendidikan di SMAN 5 Kota Bekasi dan berpindah ke SMAN 5 Kota Pekanbaru",
}

const IsiResume = ({isi}:any) => {
  return(
    <div className="bg-neutral-900">
        <div>
          <h1 className="mb-1 text-xl font-bold">
            {isi.satu}
          </h1>
          <h1 className="mb-2 text-xl text-cyan-500">
            {isi.tahun}
          </h1>
          <p className="text-xl text-neutral-400">
            {isi.des}
          </p>
        </div>
    </div>
  )
}

const PageResume = ({judul}:any) => {
  return(
    <>
      <div className="gap-20">
        <h1 className="mb-10 font-bold">{judul}</h1>
        <IsiResume isi={pendidikan1}/>
        <IsiResume isi={pendidikan2}/>
        <IsiResume isi={pendidikan3}/>
      </div>
    </>
  )
}

export default PageResume