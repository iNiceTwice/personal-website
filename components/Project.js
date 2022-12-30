import Image from "next/image"
import { BsEyeFill, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"

const Project = ({ data }) => {
    return ( 
        <>
            <div className="mt-8 w-full flex lg:flex-row flex-col gap-2">
                <motion.div initial={{opacity:0, width:0}} whileInView={{opacity:1,width:"100%"}} viewport={{once:true, amount:1}} transition={{type:"tween", duration:1}} className="lg:hidden w-full flex justify-between items-center p-4 bg-dark text-white shadow-md">
                    { data.title}
                    <a target="_blank" href={ data.repository } rel="noreferrer" className="hover:scale-110">
                        <BsGithub size={20}/>
                    </a>
                </motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:1}} transition={{type:"tween", duration:0.5}} className="relative w-full lg:w-5/12 h-[14rem] lg:h-[20rem] shadow-md">
                    <a target="_blank" rel="noreferrer" href={ data.link }>
                        <div className="group absolute flex flex-col justify-center items-center z-10 w-full h-full cursor-pointer transition-colors hover:bg-slate-800/40">
                            <BsEyeFill className="hidden group-hover:block text-zinc-100" size={35}/>
                            <p className="hidden group-hover:block text-zinc-100">See Demo</p>
                        </div>
                        <Image alt={ data.title } fill objectFit="cover" objectPosition="center" src={ data.img }/>
                    </a>
                </motion.div>
                <div className="w-full lg:w-7/12 flex flex-col gap-4">
                    <motion.div initial={{opacity:0, width:0}} whileInView={{opacity:1,width:"100%"}} viewport={{once:true, amount:1}} transition={{type:"tween", duration:1}} className="hidden w-full lg:flex justify-between items-center p-4 bg-dark text-white shadow-md">
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:0.5}} transition={{type:"tween", delay:0.8}}>
                            { data.title}
                        </motion.p>
                        <a target="_blank" rel="noreferrer" href={ data.repository } className="hover:scale-110">
                            <BsGithub size={20}/>
                        </a>
                    </motion.div>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false, amount:1}} transition={{type:"tween", duration:0.5}} className="p-4 h-full bg-zinc-100 shadow-md">
                        { data.description }
                        <br/>
                        <br/>
                        <p className="italic text-rose-900">
                            { data.tech}
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
     );
}
 
export default Project;