"use client";

import React from 'react'
import { motion, Variants } from 'framer-motion';
// import { motion } from "motion/react"

// Components
import BioSection from './BioSection'
import ExperienceSection from './ExperienceSection'
import StackIcon from './StackIcon'

import substancePainterLogo from '../../assets/my-stack-icons/substance-3d-painter.png'
import substanceDesignerLogo from '../../assets/my-stack-icons/substance-3d-designer.png'
import pythonLogo from '../../assets/my-stack-icons/python.png'
import cPlusPlusLogo from '../../assets/my-stack-icons/c-.png'
// import unrealLogo from '../../assets/my-stack-icons/UnrealEngine.png'
import unrealLogo from '../../assets/my-stack-icons/Unreal-Engine.png'
import vsCodeLogo from '../../assets/my-stack-icons/vscode.svg'
import blenderLogo from '../../assets/my-stack-icons/blender.svg'
import houdiniLogo from '../../assets/my-stack-icons/houdini-logo2.png'
import profilePic from '../../assets/pp.jpg'
import Image from 'next/image'

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const stackIconContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15,
    },
  },
}

const stackItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}


const AboutMe = () => {
  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" animate="visible"  className="flex md:h-[100vh] p-4 gap-4 bg-[#FFFFFF] text-neutral-300 flex-col md:flex-row">
        <motion.div className="flex flex-col gap-4">
          <motion.div variants={itemVariants} className="bg-[#F4F6F8] border-1 border-neutral-200/10 flex justify-center items-start rounded-2xl md:h-[25vw] md:w-[25vw] md:min-w-[250px] overflow-hidden"> <Image className='w-full scale-155' src={profilePic} alt="" /></motion.div>
          <motion.div variants={itemVariants} className='grow'><BioSection /></motion.div>
        </motion.div>
        <motion.div className="flex flex-col gap-4 grow overflow-x-auto">
          <motion.div variants={itemVariants} className='grow overflow-auto'><ExperienceSection/></motion.div>
          <motion.div variants={itemVariants} className="bg-[#F4F6F8] border-1 border-[#7F8C8D]/10 flex items-center rounded-2xl min-h-[100px] px-7 overflow-x-auto"> 
            <div className='font-bold text-xl pr-5 w-35 text-[#2C3E50]'><p>My Stack</p></div>
            <motion.div variants={stackIconContainerVariants} initial="hidden" animate="visible" className='overflow-x-auto flex items-center gap-4 py-4 scrollbar-custom'>
              <motion.div variants={stackItemVariants}><StackIcon toolTip={"Unreal Engine"} iconUrl={unrealLogo}/></motion.div>

              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Substance Painter"} iconUrl={substancePainterLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Substance Designer"} iconUrl={substanceDesignerLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Blender"} iconUrl={blenderLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"C++"} iconUrl={cPlusPlusLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Python"} iconUrl={pythonLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Visual Studio Code"} iconUrl={vsCodeLogo}/>
              </motion.div>
              <motion.div variants={stackItemVariants}>
                <StackIcon toolTip={"Houdini"} iconUrl={houdiniLogo}/>
              </motion.div>
              
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

    </>
  )
}
export default AboutMe;