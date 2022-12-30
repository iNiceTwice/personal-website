import { motion } from "framer-motion"

const SectionTitle = ({ title }) => {
    return ( 
        <>
            <h2 className="w-full text-center playfair text-5xl">{ title }</h2>
            <motion.div initial={{width:0}} whileInView={{width:"100%"}} viewport={{once:true, amount:1}} transition={{type:"tween", delay:0.3, duration:1}} className="mt-6 border-b border-slate-700/40 w-full"></motion.div>
        </>
     );
}
 
export default SectionTitle;