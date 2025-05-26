import { CodeXml, Rocket } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
  <header className='sticky top-0 border bg-white/80  border-gray-300'>
    <div className='flex max-w-7xl mx-auto justify-between h-16 items-center'>
        <div className='flex item-center gap-2'>
            <CodeXml size={28} className='text-yellow-500'/>
        <a href="/">  <h1  className='font-bold text-xl text-yellow-500'>SINTAK.</h1></a>
        </div>
        <ul className='hidden md:flex gap-8'>
            <li><a href="/AboutPage" className='hover:text-yellow-400'>tentang</a></li>
            <li><a href="/kontak"className='hover:text-yellow-400'>kontak</a></li>
            <li><a href="/Review"className='hover:text-yellow-400'>Review</a></li>
        </ul>
        <a href="/daftar" className='bg-yellow-500 px-4 py-2 text-white rounded-md 
        hover:bg-yellow-200 flex items-center ' ><Rocket size={20} /> daftar sekarang</a>
    </div>
  </header>

  )
}

export default Navbar
