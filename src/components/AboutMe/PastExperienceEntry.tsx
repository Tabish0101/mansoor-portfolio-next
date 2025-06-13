import React from 'react'


interface propsPastExperienceEntry {
    nameOfCompany: string;
    roleAtCompany: string
    duration: string;
    description: [
        summary: string,
        bulletpoints: Array<string>
    ];
}
const PastExperienceEntry: React.FC<propsPastExperienceEntry> = ({
    nameOfCompany = 'Company', 
    roleAtCompany = 'Role', 
    duration = 'from - to', 
    description = [
        'Description about what you did at this company',
        [
            'bullet point 1',
            'bullet point 2',
            'bullet point 3',
        ]
    ]
}) => {
  return (
    <div className='space-y-4 text-sm'>
        <div className='flex flex-col justify-between'>
            <div className='flex items-center'>
                <div className='text-[#7F8C8D] pr-2'><p>{nameOfCompany}</p></div>
                <hr className='text-[#7F8C8D]/15 grow'/>
                <div className='text-[#7F8C8D] text-[9px] pl-2'><p>{duration}</p></div>
            </div>
            <div>
              <p className='font-semibold pr-2 text-[#2C3E50] text-[16px]'>{roleAtCompany}</p>
            </div>
        </div>
        <div className='text-[#7F8C8D] text-[12px]'>
          <p>
            {description[0]}
            <ul className='mt-1'>
              {description[1].map((e: string) => {
                return(
                  <div className='flex pl-0' >
                    <span>🔸</span>
                    <li className='ml-1'>{e}</li>
                  </div>
                )
              })}
            </ul>
          </p>
        </div>
    </div>
  )
}



export default PastExperienceEntry
