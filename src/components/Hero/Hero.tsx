
import React from 'react';
import './Hero.css';

import arrow_button from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';
import Image from 'next/image';

interface HeroData {
text1: string;
text2: string;
}

interface HeroProps {
playStatus: boolean;
setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
heroCount: number;
setHeroCount: React.Dispatch<React.SetStateAction<number>>;
heroData: HeroData;
}

export const Hero: React.FC<HeroProps> = ({
setPlayStatus,
playStatus,
setHeroCount,
heroCount,
heroData,
}) => {
return (
<div className="hero flex flex-col justify-end gap-20 sm:gap-5 grow p-2 pb-5 sm:p-4">
    <div className="hero-text text-[48px] sm:text-[64px]">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
    </div>
    <div className="hero-explore rounded-full p-1 pl-5">
        <p>Hire me</p>
        {/* <img src={arrow_button} className="h-10" alt="arrow button" /> */}
        <Image className='h-10 w-10' src={arrow_button} alt='arrow button image'/>
    </div>
    <div className="flex p-2 justify-between">
        <ul className="hero-dots">
            {[0, 1, 2].map((index) => (
            <li
                key={index}
                onClick={() => setHeroCount(index)}
                className={`${heroCount === index ? 'hero-dot orange' : 'hero-dot'} rounded-full`}
            ></li>
            ))}
        </ul>
        <div className="hero-play">
            {/* <img
                className="h-10"
                onClick={() => setPlayStatus(!playStatus)}
                src={playStatus ? pause_icon : play_icon}
                alt="play/pause"
            /> */}
            <Image 
                className="h-10 w-10"
                onClick={() => setPlayStatus(!playStatus)}
                src={playStatus ? pause_icon : play_icon}
                alt="play/pause"
            />
            <p className="text-xs">See the video</p>
        </div>
    </div>
</div>
);
};