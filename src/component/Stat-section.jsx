import { Star } from 'lucide-react'
import React from 'react'

function StatSection() {
  return (
    <section className="py-16">
      <div className="bg-[url(/BGMI.png)] bg-fixed ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center bg-black/70 backdrop-blur-1xl text-center mx-auto  py-16 ">
          <div className="font-bold text-white">
            <h1 className="text-5xl">100+</h1>
            <p>pendaftaran</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">8+</h1>
            <p>mentor</p>
          </div>
          <div className="font-bold text-white">
            <a href="/Review">
              <div className="flex items-center justify-center ">
                <h1 className="text-5xl">5</h1>
                <Star />
              </div>
            </a>
            <p>review</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl"> 100+ </h1>
            <p>lulusan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection
