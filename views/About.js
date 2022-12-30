import Image from "next/image"
import SectionTitle from "../components/SectionTitle"
import { motion } from "framer-motion"

const About = () => {
    return ( 
        <section className="w-5/6 py-20 flex flex-col items-center">
            <span id="about" className='relative top-[-150px] lg:top-[-250px]'></span>
            <SectionTitle title="About me"/>
            <div className="lg:h-60 flex lg:flex-row flex-col items-center justify-center gap-4 mt-8">
                <motion.div initial={{opacity:0}} transition={{delay:0.5}} whileInView={{opacity:1}} viewport={{ once:true, amount:0.7}} className="relative lg:w-60 lg:h-60 w-20 h-20 shadow-md">
                    <Image fill src="/assets/logo_min.svg"/>
                </motion.div>
                <div className="w-full lg:w-4/6 h-full">
                    <motion.div layout="position" initial={{opacity:0, width:0}} transition={{type:"tween", duration:1.3, delay:0.5}} whileInView={{opacity:1, width:"100%"}} viewport={{ once:true, amount:0.3}} className="flex text-lg h-full items-center shadow-md p-8 w-full bg-zinc-100">
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:0.4}} transition={{type:"tween", delay:1.5}}>
                            Hi, I'm an <span className="text-rose-900 italic">Argentinian</span> based frontend developer. I consider myself a creative person, with classic and minimalist tastes for most things, I found web development a perfect place to express myself and get into a world where there is always something new to <span className="text-rose-900 italic">learn!</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default About; 