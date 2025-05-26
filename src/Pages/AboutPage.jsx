import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import StatSection from "../component/Stat-section";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="hero bg-white min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse border-0 bg-yellow-50 rounded-lg shadow-lg p-6">
            <img
              src="./fotoF.jpeg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold ">
                Hallo semuanya nama saya Calvin
              </h1>

              <p className="py-6">
                alasan saya masuk sintax adalah untuk menambah skill web saya
                agar bisa lebih mahir,dan menjadi programmer handal dimasa depan
                (ea)
              </p>
              <a href="/daftar">
                <button className="btn bg-yellow-500">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center items-center justify-center max-w-7xl mx-auto space-y-2 mb-12">
        <h1 className="font-bold text-6xl">About Me!!</h1>
        <p className="text-gray-500">
          saya adalah orang yang suka dengan pembuatan web dari saat mendesain sampai ke penyimpanan data, maka dari itu saya mengikuti kelas sintax
           yang dimana saya diajarkan membuat web dari awal sampai akhir. disini saya mulai mengenal tentang tailwind dan react
        </p>
      </div>


      {/* kotak  */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
      
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">website pertama</h2>
            <p>
             ini adalah project pertama saya tentang website dengan pengetahuan minim, dan hanya menggunakan css,html dan boostrap
            </p>
          </div>
          <figure>
            <img
              src="./p1.png"
              alt="Project pertama"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">ini adalah akun github saya</h2>
            <p>
             github sangat membantu untk saya mempublish project pengembangan diri saya, untuk tahu sudah sampai mana pemahaman saya 
            </p>
          </div>
          <figure>
            <img
              src="./git.png"
              alt="git"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">website kedua</h2>
            <p>
             di project yang kedua saya sudah sedikit mengerti tentang html css, dan disini saya mengetahui react dan tailwindcss
            </p>
          </div>
          <figure>
            <img
              src="p2.png"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      {/* kotak */}

      <StatSection />

      <div>
        <div className="hero bg-white min-h-screen">
          <div className="hero-content flex-col md:flex-row overflow-hidden">
            <div className="hero-content flex-col lg:flex-row  border-0 bg-yellow-50 rounded-lg shadow-lg p-6">
              <img
                src="./fo4.jpeg"
                className="max-w-sm rounded-md shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Empat Trio</h1>
                <p className="py-6">
                  tempat dimana adanya vila bintang 5 yang berada dikertapati
                  center city, dipunyai oleh mas iki.vila tersebut memliki
                  bintang lima karena layanan yang full service dari mas iki
                  seorang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
