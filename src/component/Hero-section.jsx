import { Calendar, Clock, MapPin } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-3 px-3">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">
            kembangkan skill programing anda dengan mengikuti kelas terbuka
            sintax
          </h1>
          <p className="text-gray-500 text-xl">
            Pelajari Materi Pengembangan Website Dengan React dan NextJS Bersama
            HMJ Manajemen Informtika dan Google Developer Group on Campus
            Polsri.
          </p>
          <div className="flex gap-4 flex-col text-center md:flex-row">
            <a
              href="/daftar"
              className="bg-yellow-500 px-4 py-2 text-white rounded-b-md flex-col md:flex-row"
            >
              daftar sekarang
            </a>
            <a
              href="/AboutPage"
              className="border border-yellow-400 px-4 py-2 rounded-b-md"
            >
              pelajari selengkapnya
            </a>
          </div>
          <div className="flex gap-2  ">
            {[
              { icon: Calendar, name: new Date().toLocaleDateString("id-ID") },
              {
                icon: Clock,
                name: `${String(new Date().getHours()).padStart(
                  2,
                  "0"
                )}:${String(new Date().getMinutes()).padStart(2, "0")}`,
              },
              { icon: MapPin, name: "Kampus Polsri" },
            ].map(({ icon: Icon, name }) => (
              <>
                <Icon />
                <p>{name}</p>
              </>
            ))}
          </div>
        </div>
        <img className="w-300 rounded-md" src="./fotooo.png" alt="foto"  />
      </div>
    </section>
  );
}

export default HeroSection;
 