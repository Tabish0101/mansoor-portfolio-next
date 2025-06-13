import React from 'react'
import PastExperienceEntry from './PastExperienceEntry'

import aboutMeData from './AboutMeData.json'

interface propsArrayOfWorkExperiences{
    nameOfWorkPlace: string;
    roleAtWorkPlace: string;
    durationAtWorkPlace: string;
    // descriptionAboutWork: [
    //     string, string[]
    // ];
}
const ExperienceSection = () => {
  return (
    <div className="bg-[#F4F6F8] border-1 border-[#7F8C8D]/10 flex flex-col rounded-2xl p-7 grow overflow-auto pb-10">
        <div className='text-xl font-bold mb-10 sm:mb-5'>
            <h2 className='text-[#2C3E50]'>Work Experience</h2>
            {/* <hr className='my-1 text-white/20'/> */}
        </div>
        <div className='overflow-auto grow scrollbar-custom'>
            <div className='flex flex-col gap-12'>
                {
                  aboutMeData.arrayOfWorkExperiences.map((e, index) => {
                    return(
                      <PastExperienceEntry key={index} nameOfCompany={e.nameOfWorkPlace} duration={e.durationAtWorkPlace} roleAtCompany={e.roleAtWorkPlace} description={e.descriptionAboutWork as [string, string[]]}/>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default ExperienceSection