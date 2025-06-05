import React from 'react'
// Components
import BioSection from './BioSection'
import ExperienceSection from './ExperienceSection'
import StackIcon from './StackIcon'

import substancePainterLogo from '../../assets/my-stack-icons/substance-3d-painter.png'
import substanceDesignerLogo from '../../assets/my-stack-icons/substance-3d-designer.png'
import pythonLogo from '../../assets/my-stack-icons/python.png'
import cPlusPlusLogo from '../../assets/my-stack-icons/c-.png'
import unrealLogo from '../../assets/my-stack-icons/Unreal Engine.png'
import vsCodeLogo from '../../assets/my-stack-icons/vscode.svg'
import blenderLogo from '../../assets/my-stack-icons/blender.svg'
import houdiniLogo from '../../assets/my-stack-icons/houdini-logo2.png'


export const AboutMe = () => {
  return (
    <>
      <div className="flex md:h-[100vh] p-4 gap-4 bg-[#FFFFFF] text-neutral-300 flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="bg-[#F4F6F8] border-1 border-neutral-200/10 flex justify-center items-start rounded-2xl md:h-[25vw] md:w-[25vw] md:min-w-[250px] overflow-hidden"> <img className='w-full scale-155' src="https://mansoorysfxi.github.io/Portfolio/pp.jpg" alt="" /></div>
          <BioSection />
        </div>
        <div className="flex flex-col gap-4 grow overflow-x-auto">
          <ExperienceSection/>
          <div className="bg-[#F4F6F8] border-1 border-[#7F8C8D]/10 flex items-center rounded-2xl min-h-[100px] px-7 overflow-x-auto"> 
            <div className='font-bold text-xl pr-5 w-35 text-[#2C3E50]'><p>My Stack</p></div>
            <div className='overflow-x-auto flex items-center gap-4 py-4 scrollbar-custom'>
              <StackIcon toolTip={"Unreal Engine"} iconUrl={unrealLogo}/>
              <StackIcon toolTip={"Substance Painter"} iconUrl={substancePainterLogo}/>
              <StackIcon toolTip={"Substance Designer"} iconUrl={substanceDesignerLogo}/>
              <StackIcon toolTip={"Blender"} iconUrl={blenderLogo}/>
              <StackIcon toolTip={"C++"} iconUrl={cPlusPlusLogo}/>
              <StackIcon toolTip={"Python"} iconUrl={pythonLogo}/>
              <StackIcon toolTip={"Visual Studio Code"} iconUrl={vsCodeLogo}/>
              <StackIcon toolTip={"Houdini"} iconUrl={houdiniLogo}/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
