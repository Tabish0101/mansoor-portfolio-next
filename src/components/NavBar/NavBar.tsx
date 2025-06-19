import React from 'react'
import './NavBar.css'
import Link from 'next/link';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/src/assets'; // Or a full URL like 'https://example.com/cv.pdf'
  link.download = 'Unreal_Engine_Developer_Mansoor_Khan.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const NavBar = () => {
  return (
    <div className='flex gap-4 flex-col sm:flex-row justify-between items-center py-4 sm:px-0 text-white '>
      <div className='nav-logo text-4xl sm:text-3xl'>Mansoor Khan</div>
      <div className='flex justify-between gap-4 sm:gap-10'>
        <ul className="nav-menu gap-4 sm:gap-10 sm:text-xs text-[12px] sm:text-[14px]">
          <li><Link className='nav-menu-Link border px-6 sm:px-0 py-1 sm:py-0 rounded-full sm:border-0' href="/">Home</Link></li>
          <li><Link className='nav-menu-Link border px-5 sm:px-0 py-1 sm:py-0 rounded-full sm:border-0' href="/my-projects">Projects</Link></li>
          <li><Link className='nav-menu-Link border px-4 sm:px-0 py-1 sm:py-0 rounded-full sm:border-0' href="/about-me">About me</Link></li>
        </ul>
        <button onClick={handleDownload} className='nav-CV-btn hidden sm:block px-4 py-2 sm:px-6 sm:py-3 bg-white rounded-full text-[#262626] text-[8px] sm:text-[10px] font-bold cursor-pointer hover:text-[orangered]'>Download my CV</button>
      </div>
    </div>
  )
}

export default NavBar;