import { CodeXml, Facebook, InstagramIcon , Youtube } from 'lucide-react';
import React from 'react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-yellow-500 text-neutral-content items-center p-12">
      <aside className="grid-flow-col items-center">
        <CodeXml />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="https://youtube.com">
          <Youtube />
        </a>
        <a href="https://www.instagram.com/nexeeon.d?igsh=b2ZrZWx5emJseHZw">
          <InstagramIcon />
        </a>
      </nav>
    </footer>
  );
}

export default Footer
