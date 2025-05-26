import { Book, BookmarkCheck, Rocket, User } from "lucide-react";
import React from "react";
const datakonten = [
  {
    ikon: Rocket,
    judul: "pembelajaran praktis",
    deskripsi: "dapatkan pengalaman menarik dengan belajar disintax"
  },
  {
    ikon: Book,
    judul: "menambah kemampuan literasi",
    deskripsi: "dapatkan pengetahuan dan kemampuan baru."
  },
  {
    ikon: BookmarkCheck,
    judul: "membantu dalam menandai buku ",
    deskripsi: "makanan enak ya pasti enak brayy"

  }
 

];

function About() {
return (
  <section className="py-32">
    <div className="flex flex-col px-4 items-center justify-center max-w-7xl mx-auto ">
      {/* bagian judul  */}
      <div className="text-center space-y-2 mb-12">
        <h1 className="font-bold text-6xl">mengenal lebih dekat sintax</h1>
        <p className="text-gray-500">
          Pelajari Materi Pengembangan Website Dengan React dan NextJS Bersama
          HMJ Manajemen Informtika dan Google Developer Group on Campus Polsri
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in   
          culpa qui officia deserunt mollit anim id est laborum..
        </p>
      </div>
      {/* bagian kotak */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        {datakonten.map((data) => (
          <div className="flex items-center flex-col p-4 w-sm h-48 border border-gray-500 rounded-lg text-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <data.ikon size={32} />
            </div>
            <h2 className="font-bold text-xl mb-2">{data.judul}</h2>
            <p className="text-gray-500">{data.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default About;
