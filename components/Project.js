import Image from "next/image"
import { BsEyeFill, BsGithub } from "react-icons/bs"

const Project = ({ data }) => {
    return ( 
        <>
            <div className="mt-8 w-full flex lg:flex-row flex-col gap-2">
                <div className="lg:hidden w-full flex justify-between items-center p-4 bg-dark text-white shadow-md">
                    { data.title}
                    <a target="_blank" href={ data.repository } className="hover:scale-110">
                        <BsGithub size={20}/>
                    </a>
                </div>
                <div className="relative w-full lg:w-5/12 h-[14rem] lg:h-[20rem] shadow-md">
                    <a target="_blank" href={ data.link }>
                        <div className="group absolute flex flex-col justify-center items-center z-10 w-full h-full cursor-pointer transition-colors hover:bg-slate-800/40">
                            <BsEyeFill className="hidden group-hover:block text-zinc-100" size={35}/>
                            <p className="hidden group-hover:block text-zinc-100">See Demo</p>
                        </div>
                        <Image fill objectPosition="center" src={ data.img }/>
                    </a>
                </div>
                <div className="w-full lg:w-7/12 flex flex-col gap-4">
                    <div className="hidden w-full lg:flex justify-between items-center p-4 bg-dark text-white shadow-md">
                        { data.title}
                        <a target="_blank" href={ data.repository } className="hover:scale-110">
                            <BsGithub size={20}/>
                        </a>
                    </div>
                    <div className="p-4 h-full bg-zinc-100 shadow-md">
                        { data.description }
                        <br/>
                        <br/>
                        <p className="italic text-rose-800">
                            { data.tech}
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Project;