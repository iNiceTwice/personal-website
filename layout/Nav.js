import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx"
import { GrClose } from "react-icons/gr"
import { motion } from "framer-motion";

const Nav = () => {

    const [ menu, setMenu ] = useState(false)
    const variants = {
        open:{
            opacity:1, x: 0
        },
        closed: { 
            opacity:1, x: "100%" 
        }
    }

    const handleOnClick = () => {
        setMenu(menu => !menu)
    }

    return ( 
        <>
            <motion.div initial={{opacity:0, y:-50}} transition={ {delay:0.5, duration:0.5}} animate={{opacity:1,y:0}} className="fixed flex justify-center mt-8 w-full z-50">
                <div className="w-11/12 md:w-5/6 py-4 bg-zinc-100 shadow-md">
                    <div className="flex justify-between ml-6">
                        <Link href="/">
                            <Image height={35} width={35} objectFit="contain" src="/assets/logo_min.svg" />
                        </Link>
                        <ul className="hidden sm:flex items-center gap-x-4 mr-6 text-lg text-slate-800/90">
                            <li>
                                <a className="transition-all hover:bg-rose-900 py-1 px-3 hover:text-white" href="#about">About</a>
                            </li>
                            <li>
                                <a className="transition-all hover:bg-rose-900 py-1 px-3 hover:text-white" href="#projects">Projects</a>
                            </li>
                            <li>
                                <a className="transition-all hover:bg-rose-900 py-1 px-3 hover:text-white" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <button
                            onClick={ handleOnClick }  
                            className="sm:hidden focus:bg-zinc-200/80 transition-all p-2 rounded-full mr-6 flex items-center">
                            <RxHamburgerMenu size={20}/>
                        </button>
                        <motion.div 
                            animate={ menu ? "open" : "closed" }
                            variants={ variants }
                            transition={ { duration: 0.5 } }    
                            className="sm:hidden fixed bg-zinc-50 font-sans text-white/80 w-full h-screen top-0 right-0 px-10"
                        >
                            <div className="mt-12 w-full flex flex-row-reverse">
                                <button className="transition-all p-2 focus:bg-zinc-200/80 rounded-full" onClick={ handleOnClick }>
                                    <GrClose size={15}/>
                                </button>
                            </div>
                            <div className="playfair flex flex-col items-center text-3xl gap-y-4 pt-16">
                                <a
                                    href="#about" 
                                    onClick={ handleOnClick } 
                                    className="py-1 px-3 text-slate-800/80 transition-all hover:bg-rose-900 hover:text-white cursor-pointer"
                                >
                                    About
                                </a>
                                <a
                                    href="#projects" 
                                    onClick={ handleOnClick } 
                                    className="py-1 px-3 text-slate-800/80 transition-all hover:bg-rose-900 hover:text-white cursor-pointer"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contact" 
                                    onClick={ handleOnClick } 
                                    className="py-1 px-3 text-slate-800/80 transition-all hover:bg-rose-900 hover:text-white cursor-pointer"
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
     );
}
 
export default Nav;