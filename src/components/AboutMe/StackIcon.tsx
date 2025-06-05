import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface propsStackIcon {
    iconUrl: string | StaticImageData;
    toolTip: string;
}
const StackIcon: React.FC<propsStackIcon> = ({
    iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULDrTrHeXwa0dUAWStx6_N8KM1iBWmAOWVg&s', 
    toolTip = '',
}) => {
  return (
    <div className='bg-[#7F8C8D]/20 border-1 border-[#7F8C8D]/10 p-2 rounded-xl' data-toggle="tooltip" title={toolTip}>
        <div className='rounded-full h-10 w-10'>
          {/* <img src={iconUrl} alt="logo" /> */}
          <Image src={iconUrl} alt='logo'/>
        </div>
    </div>
  )
}

export default StackIcon
