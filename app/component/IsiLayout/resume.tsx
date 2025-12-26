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

const pendidikan4: template = {
  satu : "Vocational College IPB University",
  tahun : "2025 - Now",
  des : "Sedang menempuh pendidikan di program studi Teknologi Rekayasa Komputer",
}

const Pengalaman1: template = {
  satu : "Visual Effect Designer",
  tahun : "2020 - 2025",
  des : "Pernah menjadi Freelancer di bidang Visual Effect menggunakan software After Effect, Blender, dan Cinema 4D"
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
          <p className="text-2xs text-neutral-400">
            {isi.des}
          </p>
        </div>
    </div>
  )
}

const Isinya = ({yaya}:any) => {
  return(
    <>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl">{yaya}</h1>
        <IsiResume isi={pendidikan1}/>
        <IsiResume isi={pendidikan2}/>
        <IsiResume isi={pendidikan3}/>
        <IsiResume isi={pendidikan4}/>
      </div>
    </>
  )
}

const Pengalaman = ({yaya}:any) => {
  return(
  <>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl">{yaya}</h1>
        <IsiResume isi={Pengalaman1}/>
      </div>
    </>
  )
}


const PageResume = () => {
  return(
    <>
      <div className="flex xl:flex-row gap-20 flex-col animate-fadeIn">
        <Isinya yaya="Pendidikan"/>
        <Pengalaman yaya="Pengalaman"/>
      </div>
    </>
  )
}


export default PageResume