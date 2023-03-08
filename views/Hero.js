import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { motion } from "framer-motion"
import Tooltip from "../components/Tooltip";

const Hero = () => {
    return ( 
        <section className="h-screen w-full flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20">
            <div className="flex flex-row-reverse justify-center lg:justify-start items-center playfair text-4xl lg:text-7xl">
                <div>
                    <motion.h2 initial={{opacity:0, x:-50}} transition={{type:"tween",delay:0.5, duration:0.5}} animate={{opacity:1,x:0}}>Hi,</motion.h2>
                    <motion.h2 initial={{opacity:0, x:-50}} transition={{type:"tween",delay:0.6, duration:0.5}} animate={{opacity:1,x:0}}>I'm <span className="text-rose-900 italic">Martín</span></motion.h2>
                    <motion.h2 initial={{opacity:0, x:-50}} transition={{type:"tween",delay:0.7, duration:0.5}} animate={{opacity:1,x:0}}>web developer.</motion.h2>
                    <motion.div initial={{opacity:0, x:-50}} transition={{type:"tween",delay:0.8, duration:0.5}} animate={{opacity:1,x:0}} className="flex gap-4 mt-6 items-center">
                        <a id="LinkedIn" href="https://www.linkedin.com/in/martin-planiscig/" target="_blank" rel="noreferrer">
                            <Tooltip text="LinkedIn">
                                <BsLinkedin className="hover:scale-105 cursor-pointer text-[#0e76a8]" size={30}/>
                            </Tooltip>
                        </a>
                        <a id="Github" href="https://github.com/iNiceTwice" target="_blank" rel="noreferrer">
                            <Tooltip text="Github">
                                <BsGithub className="hover:scale-105 cursor-pointer" size={30}/>
                            </Tooltip>
                        </a>
                        <a href="https://drive.google.com/file/d/1uW9cHgDrMvBN_--3CRHta-7dL4KVljg4/view?usp=share_link" target="_blank" rel="noreferrer" className="text-base text-white font-sans flex justify-center items-center p-3 bg-rose-800 hover:bg-rose-800/90 transition-colors">
                            My resume
                            <HiDownload className="ml-2 cursor-pointer text-white" size={20}/>
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center items-center lg:justify-start lg:pt-0 pt-32">
                <motion.div initial={{opacity:0, x:50}} transition={{delay:0.5, duration:0.5}} animate={{opacity:1,x:0}}  className="relative h-[18rem] w-[18rem] lg:h-[30rem] lg:w-[30rem] rounded-full overflow-hidden">
                    <Image priority alt="Martín Planiscig" fill src="/assets/pfp.png"/>
                </motion.div>
            </div>
        </section>
     );
}
 
export default Hero;