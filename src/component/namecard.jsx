import React from 'react'

function NameCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="border border-blue-300 p-4 bg-blue-200
  flex flex-col rounded-lg max-w-sm gap-4"
      >
        <img src="./pariss.png" alt="profil" className="w-50 " />
        <div>
          <h1 className="font-bold text-lg text-blue-800">
            Nama : M. faris anugrah{" "}
          </h1>
          <span className="text-sm text-gray-700">Kelas 2 Mia</span>
        </div>
        <p className="text--500">
          "Manajement Informatika adalah program studi yang mempelajari tentang
          pengelolaan dan penerapan teknologi informasi dalam organisasi untuk
          meningkatkan efisiensi dan efektivitas operasional."
        </p>
        <a
          href="https://manajemeninformatika.polsri.ac.id/id"
          className="bg-blue-800 text-white text-center rounded-lg py-2"
        >
          website MI
        </a>
      </div>
    </div>
  );
}

export default NameCard
