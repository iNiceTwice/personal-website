import SectionTitle from "../components/SectionTitle";
import { BsFillBrushFill } from "react-icons/bs"
import { SiAdobephotoshop, SiCanva, SiFigma, SiHtml5, SiTailwindcss, SiCss3, SiReact, SiNextdotjs, SiGit, SiVisualstudiocode, SiMaterialui, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiNpm, SiWebpack,SiMysql, SiPostman, SiTypescript, SiFirebase } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { FiMonitor } from "react-icons/fi"
import { FaServer } from "react-icons/fa"
import { motion } from "framer-motion"
import Tooltip from "../components/Tooltip";

const Skills = () => {
    return ( 
        <section className="py-20 w-5/6 mt-20">
            <SectionTitle title="Skills"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col gap-2">
                    <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{type:"tween",delay:0.3, duration:0.5}} viewport={{once:true,amount:1}} className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <BsFillBrushFill className="text-white mr-4" size={25}/>
                        Design
                    </motion.div>
                    <motion.div initial={{opacity:0, height:0}} whileInView={{opacity:1, height:"100%"}} transition={{type:"tween",delay:0.4, duration:0.7}} viewport={{once:true,amount:1}} className="bg-zinc-100 p-10 shadow-md h-full">
                        <h3 className="text-lg italic">
                            Elegant and simple is the hallmark of my designs, both for development and in life.
                        </h3>
                        <h3 className="mt-6 font-medium text-lg w-full text-center">Tools</h3>
                        <div className="border-b mb-8 border-slate-700/40 w-full"></div>
                        <div className="w-full flex justify-center items-center gap-8">
                            <Tooltip text="Photoshop">
                                <SiAdobephotoshop className="text-[#001E36] bg-[#31A8FF] rounded-md" size={40} />
                            </Tooltip>
                            <Tooltip text="Canva">
                                <SiCanva className="text-[#0ABAB5]" size={40} />
                            </Tooltip>
                            <Tooltip text="Figma">
                                <SiFigma size={40} />
                            </Tooltip>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-2">
                    <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{type:"tween",delay:0.3, duration:0.5}} viewport={{once:true,amount:1}} className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <FiMonitor className="text-white mr-4" size={25}/>
                        Frontend
                    </motion.div>
                    <motion.div initial={{opacity:0, height:0}} whileInView={{opacity:1, height:"100%"}} transition={{type:"tween",delay:0.4, duration:0.7}} viewport={{once:true,amount:1}} className="bg-zinc-100 p-10 shadow-md h-full">
                        <h3 className="text-lg italic">
                            With React and Nextjs I enjoy shaping my ideas and being able to bring them to life in the browser.
                        </h3>
                        <h3 className="mt-6 font-medium text-lg w-full text-center">Skills</h3>
                        <div className="border-b border-slate-700/40 w-full mb-8"></div>
                        <div className="w-full flex justify-center gap-8 flex-wrap">
                            <Tooltip text="HTML">
                                <SiHtml5 className="text-[#f06529]" size={40}/>
                            </Tooltip>
                            <Tooltip text="CSS">
                                <SiCss3 className="text-[#264de4]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Reactjs">
                                <SiReact className="text-[#61DBFB]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Typescript">
                                <SiTypescript className="text-[#264de4]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Nextjs">
                                <SiNextdotjs size={40}/>
                            </Tooltip>
                        </div>
                        <h3 className="mt-4 font-medium text-lg w-full text-center">Tools</h3>
                        <div className="mb-8 border-b border-slate-700/40 w-full"></div>
                        <div className="flex gap-8 justify-center flex-wrap w-full">
                            <Tooltip text="Visual Studio Code">
                                <SiVisualstudiocode className="text-[#0078d7]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Git">
                                <SiGit className="text-[#F1502F]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Material UI">
                                <SiMaterialui className="text-[#66B2FF]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Bootstrap">
                                <SiBootstrap className="text-[#563d7c]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Tailwind">
                                <SiTailwindcss className="text-cyan-500" size={40}/>
                            </Tooltip>
                            <Tooltip text="Redux">
                                <SiRedux className="text-[#764abc]" size={40}/>
                            </Tooltip>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-2">
                    <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{type:"tween",delay:0.3, duration:0.5}} viewport={{once:true,amount:1}} className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <FaServer className="text-white mr-4" size={25}/>
                        Backend
                    </motion.div>
                    <motion.div initial={{opacity:0, height:0}} whileInView={{opacity:1, height:"100%"}} transition={{type:"tween",delay:0.4, duration:0.7}} viewport={{once:true,amount:1}} className="bg-zinc-100 p-10 shadow-md">
                        <h3 className="text-lg italic">
                            Data is the basis of every project, despite my inclination to front-end, I have instructed myself with certain tools to give my work much more depth.
                        </h3>
                        <h3 className="mt-6 font-medium text-lg w-full text-center">Skills</h3>
                        <div className="border-b border-slate-700/40 w-full mb-8"></div>
                        <div className="w-full flex justify-center gap-8 flex-wrap">
                            <Tooltip text="Nodejs">
                                <SiNodedotjs className="text-[#68a063]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Express">
                                <SiExpress size={40}/>
                            </Tooltip>
                            <Tooltip text="Firebase">
                                <SiFirebase className="text-[#FFA611]" size={40}/>
                            </Tooltip>
                            <Tooltip text="MongoDB">
                                <SiMongodb className="text-[#589636]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Rest Api">
                                <TbApi className="text-red-600" size={40}/>
                            </Tooltip>
                            <Tooltip text="SQL">
                                <SiMysql className="text-[#f29111]" size={40}/>
                            </Tooltip>
                        </div>
                        <h3 className="mt-4 font-medium text-lg w-full text-center">Tools</h3>
                        <div className="mb-8 border-b border-slate-700/40 w-full"></div>
                        <div className="flex gap-8 justify-center flex-wrap w-full">
                            <Tooltip text="Visual Studio Code">
                                <SiVisualstudiocode className="text-[#0078d7]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Git">
                                <SiGit className="text-[#F1502F]" size={40}/>
                            </Tooltip>
                            <Tooltip text="NPM">
                                <SiNpm className="text-[#cb3837]" size={40}/>
                            </Tooltip>
                            <Tooltip text="Postman">
                                <SiPostman className="text-[#EF5B25]" size={40}/>
                            </Tooltip>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;