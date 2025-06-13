"use client";

import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import aboutMeData from './AboutMeData.json'



const BioSection = () => {
    function redirectToNewPage(url: string){
        open(url)
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/src/assets'; // Or a full URL like 'https://example.com/cv.pdf'
        link.download = 'Unreal_Engine_Developer_Mansoor_Khan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <>
        {/* <!-- Bio --> */}
        <div className="bg-[#F4F6F8] border-1 border-[#7F8C8D]/10 flex flex-col justify-between rounded-2xl grow p-5 overflow-auto scrollbar-hidden">

            {/* <!-- Bio Inner div --> */}
            <div className="overflow-auto scrollbar-custom grow flex flex-col justify-between">

            {/* <!-- Bio details --> */}
            <div className="w-full space-y-5">
                <div className="">
                    <div className=" font-bold text-2xl text-[#2C3E50]"><h1>{aboutMeData.name}</h1></div>
                    <div className=" text-sm text-[#7F8C8D] pt-0">{aboutMeData.profession}</div>
                </div>
                <div className="text-sm">
                    <div className=" py-1 flex justify-between items-center">
                        <div className=" font-bold text-[12px] text-[#2C3E50]">Website</div>
                        <div className="text-[10px] text-[#7F8C8D]">{aboutMeData.websiteUrl}</div>
                    </div>
                    <div className=" py-1 flex justify-between items-center">
                        <div className=" font-bold text-[12px] text-[#2C3E50]">Email</div>
                        <div className="text-[10px] text-[#7F8C8D]">{aboutMeData.email}</div>
                    </div>
                    <div className=" py-1 flex justify-between items-center">
                        <div className="font-bold text-[12px] text-[#2C3E50]">Phone</div>
                        <div className="text-[10px] text-[#7F8C8D]">{aboutMeData.phoneNumber}</div>
                    </div>
                </div>
                <div className="flex gap-3"> 
                    <div onClick={() => redirectToNewPage(aboutMeData.linkedInUrl)} className="text-2xl flex justify-center items-center text-[#2C3E50] hover:text-[#2C3E50]/70 cursor-pointer"><IoLogoLinkedin/></div>
                    <div onClick={() => redirectToNewPage(aboutMeData.gitHubUrl)} className="text-xl flex justify-center items-center text-[#2C3E50] hover:text-[#2C3E50]/70 cursor-pointer"><FaGithub/></div>
                    <div onClick={() => redirectToNewPage(aboutMeData.instagramUrl)} className="text-xl flex justify-center items-center text-[#2C3E50] hover:text-[#2C3E50]/70 cursor-pointer"><FaInstagram/></div>
                </div>
            </div>

            {/* <!-- Bio Button --> */}
            <div className=" w-full  flex justify-center items-center font-medium text-xl mt-35 md:mt-15">
                <button onClick={handleDownload} className=' hover:bg-[#E67E22] hover:text-[#2C3E50] text-[#E67E22] cursor-pointer p-2.5 w-full rounded-full text-[12px] font-bold width-full border-2 border-[#E67E22]'>Download my CV</button>
            </div>
            </div>
            </div>
    </>
  )
}

export default BioSection