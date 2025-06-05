"use client";

import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let heroData = [
    {text1: "Transforming Concepts", text2: "into 3D Realities"},
    {text1: "Mastering the Art of", text2: "Technical 3D Design"},
    {text1: "Innovative 3D Solutions", text2: "for the Digital Age"}
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  const url = '';

  useEffect(()=> {
    const timerId = setInterval(()=>{
      setHeroCount((count) => (count===0) ? 2 : count - 1 )
    }, 6000)
  }, []); // end useEffect

  return (
    // <div className="flex p-10 w-full flex-col items-center justify-center gap-6">
    //   <div className="flex gap-2">
    //     <button className="rounded bg-[#1D1E18] px-6 py-2 text-[#D9FFF5]">Button</button>
    //     <button className="rounded bg-[#6B8F71] px-6 py-2 text-[#D9FFF5]">Button</button>
    //     <button className="rounded bg-[#AAD2BA] px-6 py-2 text-[#1D1E18]">Button</button>
    //     <button className="rounded bg-[#D9FFF5] px-6 py-2 text-[#1D1E18]">Button</button>
    //     <button className="rounded bg-[#B9F5D8] px-6 py-2 text-[#1D1E18]">Button</button>
    //   </div>
    //   <div className="flex gap-2">
    //     <button className="h-10 w-10 rounded bg-[#1D1E18]"></button>
    //     <button className="h-10 w-10 rounded bg-[#6B8F71]"></button>
    //     <button className="h-10 w-10 rounded bg-[#AAD2BA]"></button>
    //     <button className="h-10 w-10 rounded bg-[#D9FFF5]"></button>
    //     <button className="h-10 w-10 rounded bg-[#B9F5D8]"></button>
    //   </div>
    //   <div className="flex gap-2">
    //     <button className="h-10 w-10 rounded bg-[#31393C]"></button>
    //     <button className="h-10 w-10 rounded bg-[#2176FF]"></button>
    //     <button className="h-10 w-10 rounded bg-[#33A1FD]"></button>
    //     <button className="h-10 w-10 rounded bg-[#FDCA40]"></button>
    //     <button className="h-10 w-10 rounded bg-[#F79824]"></button>
    //   </div>
    //   <div className="flex gap-2">
    //     <button className="h-10 w-10 rounded bg-[#320A28]"></button>
    //     <button className="h-10 w-10 rounded bg-[#511730]"></button>
    //     <button className="h-10 w-10 rounded bg-[#8E443D]"></button>
    //     <button className="h-10 w-10 rounded bg-[#CB9173]"></button>
    //     <button className="h-10 w-10 rounded bg-[#E0D68A]"></button>
    //   </div>
    //   {/* <!-- #320A28 #511730 #8E443D #CB9173 #E0D68A --> */}
    //   <div className="flex gap-2">
    //     <button className="h-10 w-10 rounded bg-[#320E3B]"></button>
    //     <button className="h-10 w-10 rounded bg-[#4C2A85]"></button>
    //     <button className="h-10 w-10 rounded bg-[#6B7FD7]"></button>
    //     <button className="h-10 w-10 rounded bg-[#BCEDF6]"></button>
    //     <button className="h-10 w-10 rounded bg-[#DDFBD2]"></button>
    //   </div>
    //   {/* <!-- #320E3B #4C2A85 #6B7FD7 #BCEDF6 #DDFBD2 --> */}
    //   <div className="rounded-lg border border-purple-200 bg-purple-50 text-black p-10 flex gap-10">
    //     <div className="space-y-2">
    //       <p className="text-center mb-3">Light Mode</p>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#2C3E50]"></div>
    //         <p className="text-xs font-semibold">Primary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#3498DB]"></div>
    //         <p className="text-xs font-semibold">Secondary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#FFFFFF]"></div>
    //         <p className="text-xs font-semibold">Background</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#F4F6F8]"></div>
    //         <p className="text-xs font-semibold">Surface/Sections</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#2C3E50]"></div>
    //         <p className="text-xs font-semibold">Text Primary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#7F8C8D]"></div>
    //         <p className="text-xs font-semibold">Text Secondary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#E67E22]"></div>
    //         <p className="text-xs font-semibold">Accent</p>
    //       </div>
    //     </div>

    //     <div className="space-y-2">
    //       <p className="text-center mb-3">Dark Mode</p>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#2C3E50]"></div>
    //         <p className="text-xs font-semibold">Primary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#3498DB]"></div>
    //         <p className="text-xs font-semibold">Secondary</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#1E1E1E]"></div>
    //         <p className="text-xs font-semibold">Background</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#2C3E50]"></div>
    //         <p className="text-xs font-semibold">Surface/Sections</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#ECF0F1]"></div>
    //         <p className="text-xs font-semibold">Text</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#3498DB]"></div>
    //         <p className="text-xs font-semibold">Link Hover</p>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         <div className="h-5 w-20 rounded bg-[#E67E22]"></div>
    //         <p className="text-xs font-semibold">Accent</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={``}>
      {/* <Hero 
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        heroData={heroData[heroCount]}
      /> */}
      <AboutMe/>
    </div>

  );
}



